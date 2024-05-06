import express from "express"
import UserRoutes from"./userModel.js"
import FoodRoutes from "./foodModel.js"
import TrackingRoutes from "./trackingModel.js"

const router =express.Router()
router.use('/users',UserRoutes)
router.use('/foods',FoodRoutes)
router.use('/trackings',TrackingRoutes)

export default router
