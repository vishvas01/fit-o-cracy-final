import express from 'express';
import { signup, login, user, signout } from '../controllers/auth.js';

const router = express.Router();

//signup == register
router.post(
	'/signup',
	signup
);

router.post('/login', login);

router.post('/user', user);

router.post('/signout', signout);

export default router;