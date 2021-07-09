import Category from '../models/Category';
import asyncHandler from 'express-async-handler';
import { Request, Response } from 'express';

export const getAllCategories = asyncHandler(
    async (req: Request, res: Response): Promise<void> => {
      const category = await Category.find({});
      res.json(category);
      console.log(category);
    }
  );
  
  export const postNewCategory = asyncHandler(
    async (req: Request, res: Response): Promise<void> => {
      const { category, icon } = req.body;
  
      const userExists = await Category.findOne({ category });
  
      if (userExists) {
        res.status(400);
        throw new Error('Category already exists');
      }
  
      const newCategory = await Category.create({
        category,
        icon,
      });
      console.log(newCategory);
      if (newCategory) {
        res.status(201).json({
          ...req.body,
        });
      } else {
        res.status(400);
        throw new Error('Invalid user data');
      }
    }
  );