import { Router } from "express";
import schoolModel from "../models/school.model.js"
import { getSchoolList, addSchool } from "../controllers/api.controller.js";

const router = Router();

router.get("/schoolList", getSchoolList);
router.post("/schoolList", addSchool);

export default router;