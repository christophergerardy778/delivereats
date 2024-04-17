import {type Request, type Response} from 'express';
import {errorHandler} from '../../util/errorHandler';
import {type LoginClientDto} from './loginClientDto';
import {LoginClientByCredentialsQuery} from '../../../core/client/app/login/LoginClientByCredentialsQuery';
import {queryBus} from '../../../core/client/infrastructure/QueryBus';
import {type LoginClientByCredentialsResponse} from '../../../core/client/app/login/LoginClientByCredentialsResponse';
import {successResponse} from '../../util/successResponse';

export async function loginClientController(req: Request<any, any, LoginClientDto>, res: Response) {
	try {
		const loginClientByCredentialsQuery = new LoginClientByCredentialsQuery({
			email: req.body.email,
			password: req.body.password,
		});

		const result = await queryBus.ask<LoginClientByCredentialsResponse>(
			loginClientByCredentialsQuery,
		);

		return successResponse(res, result);
	} catch (e) {
		return errorHandler(res, e as Error);
	}
}
