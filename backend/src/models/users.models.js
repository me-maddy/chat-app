import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import mongoose from "mongoose";
import {
  AUTH_TOKEN_SECRET,
  REFRESH_TOKEN_SECRET,
} from "../constants/config.js";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      minLength: [3, "Name must be at least 3 characters long"],
      trim: true,
    },
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      validate: {
        validator: (email) => {
          return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
        },
        message: (props) => `${props.value} is not a valid email address!`,
      },
      minLength: [6, "Email must be at least 6 characters long"],
      maxLength: [50, "Email must not be longer than 50 characters"],
    },
    password: {
      type: String,
      minLength: [6, "Password must be at least 6 characters long"],
      select: false,
    },
    refreshToken: {
      type: String,
    },
    socketId: {
      type: String,
    },
  },
  { timestamps: true }
);

userSchema.statics.hashPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};

userSchema.methods.isValidPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateTokens = function () {
  const authtoken = jwt.sign(
    { id: this._id, username: this.username, email: this.email },
    AUTH_TOKEN_SECRET,
    { expiresIn: "24h" }
  );
  const refreshToken = jwt.sign({ id: this._id }, REFRESH_TOKEN_SECRET, {
    expiresIn: "7d",
  });
  return { authtoken, refreshToken };
};

const User = mongoose.model("user", userSchema, "users");
export default User;
