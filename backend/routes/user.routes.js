import express from "express"
import protectRoute from "../middleware/protectRoute.js";
import { getUsersForSlider } from "../controllers/user.controller.js";
const router = express.Router();

router.get('/',protectRoute ,getUsersForSlider);

export default router;