import { Router } from "express";
import { authmiddleware } from "../middleware/middleware.js";
import { controller } from "../controllers/controller.js";

const router = Router();
//mvc
router.get("/", controller.test);
router.get("/productos", controller.readProduct);
router.get("/productos/:id", controller.readProductById);
router.post("/productos", /* authmiddleware, */ controller.createProduct);
router.put("/productos/:id", /* authmiddleware, */ controller.updateProductById);
router.delete("/productos/:id", /* authmiddleware, */ controller.deleteProductById);

router.get("/token", authmiddleware, controller.token);
router.get("/publica", controller.publica);
router.get("/privada", authmiddleware, controller.privada);


export default router;