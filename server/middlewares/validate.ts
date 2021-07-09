import {NextFunction, Request, Response} from "express";
import { validationResult } from 'express-validator';

export const validate = (req:Request, res:Response, next:NextFunction):any | String[] => {
  const error = validationResult(req);
  if (error.isEmpty()) {
    return next();
  }

  const extractedErrors:any[] = [];
  res.status(400).json({ error: error.array() });
  return res.status(422).json({
    error: extractedErrors,
  });
};
