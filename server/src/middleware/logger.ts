import { Request, Response, NextFunction } from "express";

export const logger = (req: Request, res: Response, next: NextFunction) => {
  const time = new Date().toISOString();
  console.log(`${time} | ${req.method} ${req.url}`);
  next(); // Important: pass control to next middleware or route
};