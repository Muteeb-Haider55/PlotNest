import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    usename: {
      required: true,
      type: String,
      unique: true,
    },
    email: {
      required: true,
      type: String,
      unique: true,
    },
    password: {
      required: true,
      type: String,
    },
  },
  { timestamps: true }
);
const User = mongoose.model("User", userSchema);
export default User;
