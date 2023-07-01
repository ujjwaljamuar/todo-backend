import ErrorHandler from "../middlewares/Error.js";
import { Tasks } from "../models/TaskModel.js";

export const addNewTask = async (req, res, next) => {
    try {
        const { title, description } = req.body;

        await Tasks.create({
            title,
            description,
            user: req.user,
        });

        res.status(201).json({
            success: true,
            message: "Task added successfully",
        });
    } catch (error) {
        next(error);
    }
};

export const getMyTasks = async (req, res, next) => {
    try {
        const userid = req.user._id;

        const tasks = await Tasks.find({ user: userid });

        res.status(200).json({
            success: true,
            tasks,
        });
    } catch (error) {
        next(error);
    }
};

export const TaskDone = async (req, res, next) => {
    try {
        const task = await Tasks.findById(req.params.id);

        if (!task) return next(new ErrorHandler("Task Not Found !", 404));

        task.isCompleted = !task.isCompleted;

        await task.save();

        res.status(200).json({
            success: true,
            message: "Task updated!",
        });
    } catch (error) {
        next(error);
    }
};

export const DeleteTask = async (req, res, next) => {
    try {
        const task = await Tasks.findById(req.params.id);

        if (!task) return next(new ErrorHandler("Task Not Found !", 404));

        await task.deleteOne();

        res.status(200).json({
            success: true,
            message: "Task deleted!",
        });
    } catch (error) {
        next(error);
    }
};
