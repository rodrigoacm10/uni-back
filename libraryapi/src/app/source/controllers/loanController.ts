import { Request, Response } from "express";
import prisma from "../../../config/prisma";

// Registrar empréstimo
export const registerLoan = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { userId, bookId } = req.body;
    const user = await prisma.user.findUnique({ where: { id: userId } });
    const book = await prisma.book.findUnique({ where: { id: bookId } });

    if (!user || !book) {
      res.status(404).json({ error: "Usuário ou livro não encontrado" });
      return;
    }
    if (!book.available) {
      res.status(400).json({ error: "Livro não disponível" });
      return;
    }

    const loan = await prisma.loan.create({
      data: { userId, bookId },
    });

    await prisma.book.update({
      where: { id: bookId },
      data: { available: false },
    });

    res.status(201).json(loan);
  } catch (error) {
    res.status(500).json({ error: "Erro ao registrar empréstimo" });
  }
};

// Registrar devolução
export const returnLoan = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { loanId } = req.params;
    const loan = await prisma.loan.update({
      where: { id: parseInt(loanId) },
      data: { returned: true, returnDate: new Date() },
    });

    await prisma.book.update({
      where: { id: loan.bookId },
      data: { available: true },
    });

    res.json(loan);
  } catch (error) {
    res.status(500).json({ error: "Erro ao registrar devolução" });
  }
};
