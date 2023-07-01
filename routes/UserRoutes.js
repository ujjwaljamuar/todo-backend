import express from "express";
import {
    addNewUser,
    getAllUsers,
    getMyProfile,
    login,
    logout,
} from "../controllers/UserController.js";
import { isAuthenticated } from "../middlewares/Auth.js";

const router = express.Router();

router.get("/all", getAllUsers);

router.post("/login", login);

router.get("/logout", logout);

router.post("/new", addNewUser);

router.get("/myprofile", isAuthenticated, getMyProfile);

export default router;
