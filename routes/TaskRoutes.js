import express from "express";
import {
    DeleteTask,
    TaskDone,
    addNewTask,
    getMyTasks,
} from "../controllers/TaskController.js";
import { isAuthenticated } from "../middlewares/Auth.js";

const router = express.Router();

router.post("/new", isAuthenticated, addNewTask);

router.get("/mytasks", isAuthenticated, getMyTasks);

router
    .route("/:id")
    .put(isAuthenticated, TaskDone)
    .delete(isAuthenticated, DeleteTask);

export default router;
