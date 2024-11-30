import { Router } from "express";
import { loginUser, logoutUser, signupUser } from "../Controllers/AuthController.js";
const router=Router()
router.post('/login', loginUser)
router.post('/signup',signupUser)
router.post('/logout',logoutUser)
export default router;