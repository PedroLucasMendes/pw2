import { Router } from "express"

import productController from "./product.controller"
import validate from "../../middlewares/validate";
import productSchema from "./product.schema";
import checkAuthorization from "../../middlewares/checkAuthorization";

const router = Router()


router.get("/", productController.index)
router.post("/", validate(productSchema), productController.create)
router.get("/:id", productController.read)
router.put("/:id", checkAuthorization, productController.update)
router.delete("/:id", checkAuthorization, productController.remove)

export default router
