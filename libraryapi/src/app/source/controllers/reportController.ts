import { Request, Response } from 'express'
import prisma from '../../../config/prisma'

// Livros mais emprestados
export const getTopBorrowedBooks = async (_req: Request, res: Response) => {
  try {
    const topBooks = await prisma.book.findMany({
      where: { loans: { some: {} } }, // Apenas livros com empréstimos
      orderBy: { loans: { _count: 'desc' } }, // Ordenar pela contagem de empréstimos
      take: 5, // Limitar aos 5 principais
      select: {
        id: true,
        title: true,
        author: true,
        genre: true,
        year: true,
        available: true,
        _count: {
          select: { loans: true }, // Contar os empréstimos
        },
      },
    })

    // Formatar o retorno para incluir a contagem de empréstimos diretamente
    const formattedBooks = topBooks.map((book) => ({
      ...book,
      loanCount: book._count.loans,
    }))

    res.json(formattedBooks)
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar livros mais emprestados' })
  }
}
// Usuários com empréstimos pendentes
export const getUsersWithPendingLoans = async (
  _req: Request,
  res: Response
) => {
  try {
    const users = await prisma.user.findMany({
      where: { loans: { some: { returned: false } } },
      include: { loans: true },
    })
    res.json(users)
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Erro ao buscar usuários com empréstimos pendentes' })
  }
}
