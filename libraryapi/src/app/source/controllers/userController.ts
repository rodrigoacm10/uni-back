import { Request, Response } from "express";
import prisma from "../../../config/prisma";

// Criar usuário
export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, address, email, phone } = req.body;
    const user = await prisma.user.create({
      data: { name, address, email, phone },
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar usuário" });
  }
};

// Listar todos os usuários
export const getUsers = async (_req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar usuários" });
  }
};

// Buscar usuário por ID
export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: parseInt(req.params.id) },
    });
    user
      ? res.json(user)
      : res.status(404).json({ error: "Usuário não encontrado" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar usuário" });
  }
};

// Atualizar usuário
export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, address, email, phone } = req.body;
    const user = await prisma.user.update({
      where: { id: parseInt(id) },
      data: { name, address, email, phone },
    });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar usuário" });
  }
};

// Deletar usuário
export const deleteUser = async (req: Request, res: Response) => {
  try {
    await prisma.user.delete({ where: { id: parseInt(req.params.id) } });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Erro ao deletar usuário" });
  }
};
