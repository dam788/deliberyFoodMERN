import {Router} from 'express';

const router = Router()

import {getAllCategories} from '../controllers/categoryController';


router.get('/', getAllCategories)


export default router