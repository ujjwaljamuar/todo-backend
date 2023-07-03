import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect(process.env.mongoURI, {
      dbName: "todoBackend",
    })
    .then((c) => console.log(`Database Connected with ${c.connection.host}`))
    .catch((e) => console.log(e));
};