import express from 'express';
import { register } from '../controllers/authController';

const router = express.Router();

//register
router.post("/register", register)

export default router;