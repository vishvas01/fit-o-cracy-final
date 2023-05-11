import { Schema, model } from 'mongoose';

const bmiSchema = Schema(
	{
		email: {
			type: String,
			required: true,
		},
        weight:{
            type: String,
            required:true,
        },
        height:{
            type: String,
            required:true,
        }
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

export const BMI = model('bmi', bmiSchema);