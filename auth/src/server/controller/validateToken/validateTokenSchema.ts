import Joi from 'joi';

export const validateTokenSchema = Joi.object({
	token: Joi.string()
		.required(),
});
