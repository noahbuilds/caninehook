import { Router } from "express";
import { dogController } from "../controllers/index";
const router: Router = Router();

router.get("/", dogController.getDogs);
router.get("/:id", dogController.getDogById);
router.post("/", dogController.createDog);
router.delete("/:id", dogController.deleteDog);
router.patch("/:id/increase-hook", dogController.updateDogHookNumber);
router.patch("/:id/hook-status/:status", dogController.updateDogHookStatus);
router.post("/:id/price", dogController.updateDogPrice);

export { router as dogRouter };
