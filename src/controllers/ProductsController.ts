import { Request, Response } from "express";
import { AppError } from "../AppError.js";
import { z } from "zod";

export class ProductsController {
  index(req: Request, res: Response) {
    const { page, limit } = req.query;
    res.send(`Página ${page} de ${limit}`);
  }

  create(req: Request, res: Response) {
    const bodySchema = z.object({
      name: z.string().nullish(),
      price: z.number().nullish(),
    });

    const { name, price } = bodySchema.parse(req.body);

    if (!name || !price) {
      throw new AppError("Erro ao criar produto", 400);
    }

    res.send({ name, price, user_id: req.user_id });
  }
}
