import express from 'express';
import { gplan } from '../controllers/gplan.js'
const router = express.Router();

router.post(
	'/',
	gplan
);

export default router;