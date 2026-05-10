import { Router } from "express";
import {
  addMachine,
  editMachine,
  listMachines,
  removeMachine,
  showMachine,
} from "../controllers/machineController.js";
import { requireAuth } from "../middleware/authMiddleware.js";
import { uploadMachineImage } from "../middleware/uploadMiddleware.js";

const router = Router();

router.get("/", listMachines);
router.get("/:slug", showMachine);
router.post("/", requireAuth, uploadMachineImage.single("image"), addMachine);
router.put("/:id", requireAuth, uploadMachineImage.single("image"), editMachine);
router.delete("/:id", requireAuth, removeMachine);

export default router;
