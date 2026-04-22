import express, { Router, Request, Response } from "express";
import { userdata, updateMe, deleteMe } from "../controllers/userControllers";
import { signup, login, protect, forgetPassword, resetPassword, updatePassword } from "../controllers/authControllers";

const userRoutes: Router = express.Router();

// User Routes
userRoutes.route("/me").get(protect, userdata);
userRoutes.route("/me").patch(protect, updateMe);
userRoutes.route("/me").delete(protect, deleteMe);

// User Auth Routes
userRoutes.route("/auth/signup").post(signup);
userRoutes.route("/auth/login").post(login);
userRoutes.route("/auth/forgot-password").post(forgetPassword);
userRoutes.route("/auth/reset-password/:token").patch(resetPassword);
userRoutes.route("/auth/update-password").patch(protect, updatePassword);

export default userRoutes;
