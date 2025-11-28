import { Router } from "express"
import productRouter from "../resources/product/product.router"
import userRouter from "../resources/user/user.router"
import authRouter from "../resources/auth/auth.router"
import purchaseItemRouter from "../resources/purchaseItem/purchaseItem.router"

const router = Router()

router.use("/product", productRouter)
router.use("/users", userRouter)
router.use("/auth", authRouter)
router.use("/purchaseItem", purchaseItemRouter)
export default router