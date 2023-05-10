import { Schema, model } from 'mongoose';

const userSchema = Schema(
	{
		first_name: {
			type: String,
			required: true,
		},
        last_name: {
			type: String,
			required: true,
		},
        gender: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
		phone_number: {
			type: String,
			required: false,
		},
		email: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
		toJSON: {
			transform(_, returnedData) {
				returnedData.id = returnedData._id;
				delete returnedData._id;
			},
		},
	}
);

export const User = model('user', userSchema);