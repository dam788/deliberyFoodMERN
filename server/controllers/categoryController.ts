import Category from '../models/Category';
import asyncHandler from 'express-async-handler';
import { Request, Response } from 'express';

export const getAllCategories = asyncHandler(
    async (req: Request, res: Response): Promise<void> => {
      const category = await Category.find({});
      res.json(category);
    }
  );
  
  export const postNewCategory = asyncHandler(
    async (req: Request, res: Response): Promise<void> => {
      const { section, icon } = req.body;
  
      const categoryExists = await Category.findOne({ section });
  
      if (categoryExists) {
        res.status(400);
        throw new Error('Category already exists');
      }
  
      const newCategory = await Category.create({
        section,
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