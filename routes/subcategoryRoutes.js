import { Router } from "express";
import {
  addSubcategory,
  editSubcategory,
  listSubcategories,
  removeSubcategory,
} from "../controllers/subcategoryController.js";
import { requireAuth } from "../middleware/authMiddleware.js";

const router = Router();

router.get("/", listSubcategories);
router.post("/", requireAuth, addSubcategory);
router.put("/:id", requireAuth, editSubcategory);
router.delete("/:id", requireAuth, removeSubcategory);

export default router;
