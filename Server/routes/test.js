import express from 'express';
import { test } from '../controllers/test.js';
const router = express.Router();

// signup == register
router.get(
	'/',
	test
);

export default router;