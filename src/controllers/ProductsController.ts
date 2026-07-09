import { Request, Response } from "express";
import { AppError } from "../AppError.js";

export class ProductsController {
  index(req: Request, res: Response) {
    const { page, limit } = req.query;
    res.send(`Página ${page} de ${limit}`);
  }

  create(req: Request, res: Response) {
    const { name, price } = req.body;

    if (!name || !price) {
      throw new AppError("Erro ao criar produto", 400);
    }

    res.send({ name, price, user_id: req.user_id });
  }
}
