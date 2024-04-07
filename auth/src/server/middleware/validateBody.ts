import type joi from 'joi';
import {type NextFunction, type Request, type Response} from 'express';
import {badRequestResponse} from '../util/badRequestResponse';

export function validateBody(schema: joi.Schema) {
	return (req: Request, res: Response, next: NextFunction) => {
		const {error} = schema.validate(req.body);

		if (error) {
			return badRequestResponse(res);
		}

		next();
	};
}
