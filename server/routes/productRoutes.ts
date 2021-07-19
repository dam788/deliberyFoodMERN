import { Router } from 'express';
const router = Router();
import {
  getAllProducts,
  getOneProduct,
  postProduct,
  deleteProduct
} from '../controllers/productController';
import { validate } from '../middlewares/validate';
// import {productValidationRules} from '../middlewares/productsValidation' /* no me anda el middleware!!! ayuda!!!! */

router.get('/', validate, getAllProducts);
router.get('/:id', validate, getOneProduct);
router.post('/', validate, postProduct);
router.delete('/:id', validate, deleteProduct);

export default router;
