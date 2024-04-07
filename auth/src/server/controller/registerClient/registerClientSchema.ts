import Joi from 'joi';

export const registerClientSchema = Joi.object({
	name: Joi.string()
		.required()
		.min(3)
		.max(50),

	lastname: Joi.string()
		.min(3)
		.max(50)
		.required(),

	email: Joi.string()
		.email()
		.min(3)
		.max(50)
		.required(),

	password: Joi.string()
		.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
		.min(8)
		.max(50)
		.required(),

	birthday: Joi.string()
		.pattern(/^\d{2}-\d{2}-\d{4}$/)
		.required(),
});
