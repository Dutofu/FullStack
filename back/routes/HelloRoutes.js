import express from "express";
import { sayHello, sayBonjour } from "../controllers/HelloController.js";

const router = express.Router();

router.get("/", sayHello)

router.get("/french", sayBonjour)
    
export default router;