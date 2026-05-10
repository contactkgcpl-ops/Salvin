import { Router } from "express";
import { addCategory, editCategory, listCategories, removeCategory } from "../controllers/categoryController.js";
import { requireAuth } from "../middleware/authMiddleware.js";

const router = Router();

router.get("/", listCategories);
router.post("/", requireAuth, addCategory);
router.put("/:id", requireAuth, editCategory);
router.delete("/:id", requireAuth, removeCategory);

export default router;
