import { Router } from "express";
const router:Router = Router()
import { authController } from "../controllers";


router.post("/register", authController.createUser)
router.post("/login", authController.loginUser)
router.post("/logout", authController.loginUser)


export {
    router as authRouter
}