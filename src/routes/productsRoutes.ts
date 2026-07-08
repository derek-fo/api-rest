import { Router } from 'express';
import { myMiddleware } from '../middlewares/myMiddleware.js';

const productsRoutes = Router();

productsRoutes.get("/", (req, res) => {
  const { page, limit } = req.query;
  res.send(`Página ${page} de ${limit}`);
})
productsRoutes.post("/", myMiddleware, (req, res) => {
  const { name, price } = req.body;

  res.send({ name, price, user_id: req.user_id });
})

export { productsRoutes };