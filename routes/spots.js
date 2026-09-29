import express from 'express'
import SpotsController from '../controllers/spots.js'

const router = express.Router()

router.get('/', SpotsController.getSpots)

export default router