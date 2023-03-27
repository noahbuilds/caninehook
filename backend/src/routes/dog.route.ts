import { Router } from "express";
import { dogController } from "../controllers/index";
const router: Router = Router();

router.get("/", dogController.getDogs);
router.get("/:id", dogController.getDogById);
router.post("/:ownerId", dogController.createDog)
// router.patch("/")

export { router as dogRouter };
