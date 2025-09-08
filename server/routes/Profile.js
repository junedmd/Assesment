import express from "express";
const router =express.Router()
import { createProfile, updateProfile ,getProfile ,fetchProjects ,fetchTopSkills, searchProfileData ,checkHealth} from "../controllers/ProfileController.js";



router.get("/" ,getProfile);
router.post("/",createProfile);
router.put("/",updateProfile);

router.get("/projects", fetchProjects);
router.get("/skills/top", fetchTopSkills);

router.get("/search", searchProfileData);
router.get("/health", checkHealth);



export default router;