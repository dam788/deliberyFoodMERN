import { Router } from 'express';
const router = Router();
import {
  getAllProducts,
  getOneProduct,
} from '../controllers/productController';
import { validate } from '../middlewares/validate';
import { productValidationRules } from '../middlewares/productsValidation';

router.get('/', validate, getAllProducts);
router.get('/:id', validate, getOneProduct);

export default router;
