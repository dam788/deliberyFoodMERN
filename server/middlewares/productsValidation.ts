import { body,ValidationChain } from 'express-validator';

export const productValidationRules = ():ValidationChain[] => {
  return [
    body('name')
      .trim()
      .escape()
      .not()
      .isEmpty()
      .withMessage("user name can't be empty")
      .bail()
      .isLength({ min: 2, max: 20 })
      .withMessage('Name must be between 2 and 20 characters long')
      .bail(),
    body('img')
      .not()
      .isEmpty()
      .withMessage('must complete image field!')
      .bail(),
    body('section')
      .trim()
      .escape()
      .not()
      .isEmpty()
      .withMessage("section can't be empty")
      .bail()
      .isLength({ min: 2, max: 15 })
      .withMessage('Name must be between 2 and 15 characters long')
      .bail(),
    body('price')
      .isInt()
      .withMessage('price must be number!')
      .bail()
      .not()
      .isEmpty()
      .withMessage("price can't be empty")
      .bail(),
    body('description')
      .trim()
      .escape()
      .not()
      .isEmpty()
      .withMessage('must complete description field')
      .bail()
      .isLength({ min: 6, max: 140 })
      .withMessage('description must be 6 to 140 characters long')
      .bail(),
  ];
};
