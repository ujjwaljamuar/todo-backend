import express from "express";
import {
    getAllUsers,
    getMyProfile,
    login,
    logout,
    register,
} from "../controllers/UserController.js";
import { isAuthenticated } from "../middlewares/Auth.js";

const router = express.Router();

router.post("/new", register);
router.post("/login", login);

router.get("/logout", logout);

router.get("/all", isAuthenticated, getAllUsers);

router.get("/myprofile", isAuthenticated, getMyProfile);

export default router;
