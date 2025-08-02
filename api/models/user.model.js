import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    username: {
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
    avatar: {
      type: String,
      default:
        "https://www.silcharmunicipality.in/wp-content/uploads/2021/02/male-face.jpg",
    },
  },
  { timestamps: true }
);
const User = mongoose.model("user", userSchema);
export default User;
