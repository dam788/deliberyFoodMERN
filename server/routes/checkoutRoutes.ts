import express from 'express'
import {createPreference, feedback} from '../controllers/checkoutController'

const router = express.Router()

router.post('/create_preference', createPreference) 
//agregar middleware pa chequea q est en storage el token con middleware

router.get('/feedback', feedback)

export default router