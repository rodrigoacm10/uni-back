import { Request, Response } from "express";
import prisma from "../../../config/prisma";

// Criar livro
export const createBook = async (req: Request, res: Response) => {
  const { title, author, genre, year } = req.body;
  const book = await prisma.book.create({
    data: { title, author, genre, year },
  });
  console.log(book);

  try {
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar livro" });
  }
};

// Listar todos os livros
export const getBooks = async (_req: Request, res: Response) => {
  const books = await prisma.book.findMany();
  console.log(books);
  try {
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar livros" });
  }
};

// Buscar livro por ID
export const getBookById = async (req: Request, res: Response) => {
  try {
    const book = await prisma.book.findUnique({
      where: { id: parseInt(req.params.id) },
    });
    book
      ? res.json(book)
      : res.status(404).json({ error: "Livro não encontrado" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar livro" });
  }
};

// Atualizar livro
export const updateBook = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, author, genre, year } = req.body;
    const book = await prisma.book.update({
      where: { id: parseInt(id) },
      data: { title, author, genre, year },
    });
    res.json(book);
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar livro" });
  }
};

// Deletar livro
export const deleteBook = async (req: Request, res: Response) => {
  try {
    await prisma.book.delete({ where: { id: parseInt(req.params.id) } });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Erro ao deletar livro" });
  }
};
