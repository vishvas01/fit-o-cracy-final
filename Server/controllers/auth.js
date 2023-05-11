import bcrypt from "bcryptjs";
import * as dotenv from "dotenv";
import { User } from "../models/User.js";

dotenv.config();

export const signup = async (req, res) => {
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const email = req.body.email;
  const password = req.body.password;
  const phone_number = req.body.phone_number;
  const gender = req.body.gender;
  try {
    const emailExist = await User.findOne({ email: email });
    if (emailExist) {
      const error = new Error(
        "Email already exists. Please try using a different email."
      );
      error.stausCode = 401;
      throw error;
    }
    const user = new User({
      first_name,
      last_name,
      email,
      password,
      phone_number,
      gender,
    });
    const result = await user.save();
    res.status(201).json({ message: "User created!", userId: result._id });
  } catch (err) {
    console.log(err.message);
  }
};

export const login = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  
  let loadedUser;
  try {
  	const user = await User.findOne({ email: email });
  	if (!user) {
  		const error = new Error('A user with this email could not be found.');
  		error.statusCode = 401;
  		throw error;
  	}
  	loadedUser = user;
  	const isEqual = await bcrypt.compare(password, user.password);
  	if (!isEqual) {
  		const error = new Error('Wrong password!');
  		error.statusCode = 401;
  		throw error;
  	}
  	const token = jwt.sign(
  		{
  			email: loadedUser.email,
  			name:loadedUser.name,
  			userId: loadedUser._id.toString(),
  		},
  		process.env.JWT_KEY,
  		{ expiresIn: '1h' }
  	);
  	// console.log('The token', token);
  	res.setHeader('Set-Cookie',cookie.serialize('jwt',token,{
  		httpOnly:false,
  		domain:'http://localhost:5173/',
  		'path':'/'
  	}))
  	req.session = {
  		jwt: token,
  	};
  	res.status(200).json({ token: token, userId: loadedUser._id.toString(),name:loadedUser.name });
  } catch (err) {
  	if (!err.statusCode) {
  		err.statusCode = 500;
  	}
  	next(err);
  }
};

export const user = async (req, res, next) => {
  // const userData = req.currentUser;
  // console.log('User data', userData);
  // res.status(200).json({
  // 	success: true,
  // 	message: 'Signed In',
  // 	data: userData,
  // });
};

export const signout = async (req, res, next) => {
  // req.session = null;
  // res.status(200).json({ message: 'Signed Out' });
};
