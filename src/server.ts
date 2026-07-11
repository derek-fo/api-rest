import express, { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";

import { routes } from "./routes";
import { AppError } from "./utils/AppError";

const PORT = 3333;

const app = express();

app.use(express.json());

app.use(routes);

app.use((err: any, req: Request, res: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      message: err.message,
    });

    if (err instanceof ZodError) {
      return res
      .status(400)
      .json({ message: "Validation error", issues: err.issues });
    }
  }
  res.status(500).json({ message: "Internal server error" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
