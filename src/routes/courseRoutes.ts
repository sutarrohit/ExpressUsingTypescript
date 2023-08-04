import express, { Router } from "express";
import {
  getCourses,
  createCourse,
  getOneCourse,
  updateCourse,
  purcheaseCourse,
  broughtCourses,
} from "../controllers/courseController";
import { protect, protectAdmin } from "../controllers/authControllers";

const courseRoutes: Router = express.Router();

courseRoutes.route("/courses").get(protect, protectAdmin, getCourses);
courseRoutes.route("/courses/:courseId").get(getOneCourse);
courseRoutes.route("/createCourse").post(protect, protectAdmin, createCourse);
courseRoutes.route("/updateCourse/:courseId").patch(protect, protectAdmin, updateCourse);
courseRoutes.route("/purcheaseCourse/:courseId").post(protect, purcheaseCourse);

courseRoutes.route("/broughtCourses").get(protect, broughtCourses);

export default courseRoutes;
