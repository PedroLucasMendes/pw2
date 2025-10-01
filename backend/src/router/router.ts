import { Router } from "express"
import productRouter from "../resources/product/product.router"
import userRouter from "../resources/user/user.router"
import authRouter from "../resources/auth/auth.router"

const router = Router()

router.use("/products", productRouter)
router.use("/users", userRouter)
router.use("/auth", authRouter)
export default router