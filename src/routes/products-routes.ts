import { Router } from 'express';
import { myMiddleware } from '../middlewares/myMiddleware';

const productsRoutes = Router();

productsRoutes.get("/", (req, res) => {
  res.send("Hello World!");
})
productsRoutes.send("/", (req, res) => {
  res.send("Hello World!");
})