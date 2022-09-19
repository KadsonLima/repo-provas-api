import { Request, Response, NextFunction } from "express";

export default async function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.status(err.status || 500).send(err.message || "Internal server error");
}

interface Error {
  status: number;
  message: string;
}
