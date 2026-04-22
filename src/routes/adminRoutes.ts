import express, { Router, Request, Response, NextFunction } from "express";
import { protect, protectAdmin } from "../controllers/authControllers";
import {
  getAdmin,
  adminSignup,
  adminLogin,
  adminForgotPassword,
  adminUpdatePassword,
  updateAdmin,
  deleteAdmin,
  adminResetPassword,
} from "../controllers/adminControllers";
const adminRoutes: Router = express.Router();

// Admin Profile Routes
adminRoutes.route("/me").get(protect, protectAdmin, getAdmin);
adminRoutes.route("/me").patch(protect, protectAdmin, updateAdmin);
adminRoutes.route("/me").delete(protect, protectAdmin, deleteAdmin);

// Admin Auth Routes
adminRoutes.route("/auth/signup").post(adminSignup);
adminRoutes.route("/auth/login").post(adminLogin);
adminRoutes.route("/auth/forgot-password").post(adminForgotPassword);
adminRoutes.route("/auth/reset-password/:token").patch(adminResetPassword);
adminRoutes.route("/auth/update-password").patch(protect, protectAdmin, adminUpdatePassword);

export default adminRoutes;
