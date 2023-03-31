import { Router } from "express";
import { dogController } from "../controllers/index";
const router: Router = Router();

router.get("/", dogController.getDogs);
router.get("/:id", dogController.getDogById);
router.post("/", dogController.createDog)
router.delete("/:id", dogController.deleteDog)

export { router as dogRouter };
