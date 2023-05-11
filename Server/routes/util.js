import express from 'express';
import { bmi } from '../controllers/util.js';
const router = express.Router();

// signup == register
router.post(
	'/bmi',
	bmi
);

export default router;