import { Router } from "express";
import { authmiddleware } from "../middleware/middleware.js";
import { userController } from "../controllers/userController.js";
import { controller } from "../controllers/controller.js";

const router = Router();

router.post("/login", userController.login);
router.post("/register", userController.register);
router.post("/usuarios", authmiddleware, controller.createUser);
router.get("/usuarios", /* authmiddleware, */ controller.readUsers);
router.put("/usuarios/:id", authmiddleware, controller.updateUser);
router.delete("/usuarios/:id", authmiddleware, controller.deleteUser);

export default router;
