import { Router } from "express";
import { register, testConcection } from "../controllers/auth.controller.js";

const router = Router();

router.post('/register', register);
router.post('/check-connection', testConcection);

export default router;