import bcrypt from 'bcryptjs';
import * as dotenv from 'dotenv';
import { BMI } from '../models/bmi.js';
import { User } from '../models/User.js';

dotenv.config();

export const bmi = async (req, res, next) => {
    const email = req.body.email;
    const height = req.body.height;
    const weight = req.body.weight;
    let loadedUser;
    try {
        const user = await User.findOne({ email: email })
        if (!user) {
            const error = new Error('A user with this email could not be found.');
            error.statusCode = 401;
            throw error;
        }
        loadedUser = user;
        const bmi = new BMI({
            email,weight,height
        });
        const result = await bmi.save();
        console.log(result);
        res.status(200).json({message:"Success",result});
    } catch (err) {
      console.log(err);
    }
};
