import { Request, Response, NextFunction } from 'express';

export function myMiddleware(req: Request, res: Response, next: NextFunction) {

    req.user_id = "12345";

    return next();
}