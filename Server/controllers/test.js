import bcrypt from 'bcryptjs';
import * as dotenv from 'dotenv';
import { User } from '../models/User.js';

dotenv.config();

export const test = async (req, res, next) => {
    console.log("Esadsjkasd jk");
    res.send('lol');
};
