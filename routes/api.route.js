import { Router } from "express";
import schoolModel from "../models/school.model.js"
import { getSchoolList, addSchool } from "../controllers/api.controller.js";
import { validateCoordinates } from "../middlewares/validateCoordinates.middleware.js";
import { validateString } from "../middlewares/validateString.middleware.js";

const router = Router();

router.get("/schoolList",validateCoordinates, getSchoolList);
router.post("/schoolList",validateCoordinates, validateString, addSchool);

export default router;