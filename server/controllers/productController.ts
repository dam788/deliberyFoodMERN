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

export const postProduct = asyncHandler(async (req:Request, res:Response): Promise<void> => {
  const product = new Product({
    ...req.body,
  });
  const newProduct = await product.save();
  res.json(newProduct);
});

export const patchProduct = asyncHandler(async (req:Request, res:Response):Promise<void> => {
  try {
    const updateProduct = await Product.updateOne(
      {_id: req.params.id},
      { $set: {...req.body}}
    )
    res.json(updateProduct)
  } catch (error) {
    res.status(404).json({ msg: 'product not found' });
  }
})

export const deleteProduct = asyncHandler(async (req:Request, res:Response): Promise<void> => {
  const removeProduct = await Product.remove({_id: req.params.id})
  res.json(removeProduct)
});




