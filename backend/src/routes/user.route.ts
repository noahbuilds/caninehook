import { Router } from "express";
import {userController} from "../controllers/index"
const router: Router = Router();



//get users
router.get("/", userController.getUsers);

//get userbyId
router.get("/:id", userController.getUserById);
router.post("/dog-inspection/:dogId", userController.requestDogInspection)


export { router as userRouter };
