import express, { Router } from "express";
import {
  getCourses,
  createCourse,
  getOneCourse,
  updateCourse,
  purchaseCourse,
  broughtCourses,
} from "../controllers/courseController";
import { protect, protectAdmin } from "../controllers/authControllers";

const courseRoutes: Router = express.Router();

courseRoutes.route("/").get(protect, protectAdmin, getCourses);
courseRoutes.route("/:courseId").get(getOneCourse);
courseRoutes.route("/").post(protect, protectAdmin, createCourse);
courseRoutes.route("/:courseId").patch(protect, protectAdmin, updateCourse);
courseRoutes.route("/:courseId/purchase").post(protect, purchaseCourse);
courseRoutes.route("/purchased").get(protect, broughtCourses);

export default courseRoutes;
