import express from "express";
import { userLogin, userRegister } from "../controllers/user.js";
const router = express.Router()

router.post("/", userRegister);
router.post("/login", userLogin);


export default router;