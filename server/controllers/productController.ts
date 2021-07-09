import Product from '../models/Product';
import asyncHandler from 'express-async-handler';
import { Request, Response } from 'express';

export const getAllProducts = asyncHandler(async (req:Request, res:Response): Promise<void> => {
  const products = await Product.find({});
  res.json(products);
});

export const getOneProduct = asyncHandler(async (req:Request, res:Response): Promise<void> => {
  const id = req.params.id;
  const product = await Product.findById(id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ msg: 'product not found' });
  }
});
