import express from "express";
import userRouter from "./routes/UserRoutes.js";
import taskRouter from "./routes/TaskRoutes.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/Error.js";
import cors from "cors";

export const app = express();

dotenv.config();

// Using Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin: [process.env.FRONTEND_URL],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);

// Using routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/tasks", taskRouter);

app.get("/", (req, res) => {
    res.send("<h1>Working Just Fine !!!</h1>");
});

// Using Error Middleware
app.use(errorMiddleware);
