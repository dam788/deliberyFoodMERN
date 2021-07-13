import {Router} from 'express';

const router = Router()

import {getAllCategories, postNewCategory} from '../controllers/categoryController';


router.get('/', getAllCategories)
router.post('/', postNewCategory)


export default router