import { Router } from "express";
import { dogController } from "../controllers/index";
const router: Router = Router();

router.get("/", dogController.getDogs);
router.get("/:id", dogController.getDogById);
router.post("/", dogController.createDog);
router.delete("/:id", dogController.deleteDog);
router.patch("/:id/add-hook", dogController.updateDogHookNumber);
router.patch("/:id/:status", dogController.updateDogHookStatus)

export { router as dogRouter };
