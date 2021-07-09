import {Router} from 'express';

const router = Router()

import {getAllCategories} from '../controllers/addProductController';


router.get('/', getAllCategories)


export default router