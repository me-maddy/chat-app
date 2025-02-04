import mongoose from "mongoose";
import userModel from "../models/users.models.js";

export const createUser = async ({ name, email, username, password }) => {
  const hashedPassword = await userModel.hashPassword(password);
  const user = await userModel.create({
    name,
    email,
    username,
    password: hashedPassword,
  });
  if (!user) {
    throw Error("User could not be created");
  }
  delete user._doc.password;
  delete user._doc.createdAt;
  delete user._doc.updatedAt;
  delete user._doc.__v;
  return user;
};

export const loginUser = async ({ email, password }) => {
  const user = await userModel.findOne({ email }).select("+password");
  if (!user) {
    throw Error("User doesn't exist");
  }
  const isValidPassword = await user.isValidPassword(password);
  if (!isValidPassword) {
    throw Error("Password is not valid");
  }
  delete user._doc.password;
  delete user._doc.createdAt;
  delete user._doc.updatedAt;
  delete user._doc.__v;
  return user;
};

export const getUserDetails = async (userId) => {
  const user = await userModel.findById(userId);
  if (!user) throw Error("User doesn't exist");
  return user;
};

export const allUsersExist = async (userIds) => {
  const count = await userModel.countDocuments({ _id: { $in: userIds } });
  return count === userIds.length;
};
