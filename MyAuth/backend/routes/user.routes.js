import express from "express";
import { profileUpdate, userLogin, userLogout, userRegister } from "../controller/user.controller.js";
import { isAuthenticated } from "../middleware/user.middeware.js";

const router = express.Router();

router.route("/register").post(userRegister)
router.route("/login").post(userLogin)
router.route("/logout").get(isAuthenticated,userLogout)
router.route("/profile/update").post(isAuthenticated, profileUpdate)

export default router;