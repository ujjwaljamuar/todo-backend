import express from "express";
import UserRouter from "./routes/UserRoutes.js";
import TaskRouter from "./routes/TaskRoutes.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { ErrorMiddleWare } from "./middlewares/Error.js";
import cors from "cors";

export const app = express();
dotenv.config();

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin: [process.env.FRONTEND_URL],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);

app.use(ErrorMiddleWare);

app.use("/api/v1/users", UserRouter);
app.use("/api/v1/tasks", TaskRouter);

app.get("/", (req, res) => {
    res.send("<h1>Server is working</h1>");
});
