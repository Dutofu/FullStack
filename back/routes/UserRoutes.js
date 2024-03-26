import Express from "express";
import { getProfile, favoriteAgent } from "../controllers/UserController.js";

const router = Express.Router();

router.get("/", getProfile);
router.put("/favorite", favoriteAgent);

export default router;