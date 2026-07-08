import { Request, Response } from "express";

export class ProductsController {
    index  (req: Request, res: Response) {
          const { page, limit } = req.query;
          res.send(`Página ${page} de ${limit}`);
    }

    create (req: Request, res: Response) {
          const { name, price } = req.body;

  res.send({ name, price, user_id: req.user_id });
    }
}
