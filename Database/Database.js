import mongoose from "mongoose";

export const connectDb = () => {
    mongoose
        .connect(process.env.mongoURI, { dbName: "todoBackend" })
        .then(() => console.log("Database connected"))
        .catch((e) => console.log(e));
};
