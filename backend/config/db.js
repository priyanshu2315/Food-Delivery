import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://priyanshu8745singh:priyanshu2315@cluster0.lkzde6n.mongodb.net/food-del"
    )
    .then(() => {
      console.log("DB connected successfully");
    });
};
