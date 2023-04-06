import { Router } from "express";
import { UserController } from "../controllers/index";
import { container } from "tsyringe";
const router: Router = Router();

const userController = container.resolve(UserController);
//get users
router.get("/", userController.getUsers);

//get userbyId
router.get("/:id", userController.getUserById);
router.post("/dog-inspection/:dogId", userController.requestDogInspection);

export { router as userRouter };
