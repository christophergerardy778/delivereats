import {type Request, type Response} from 'express';
import {type ValidateTokenDto} from './validateTokenDto';
import {errorHandler} from '../../util/errorHandler';
import {container} from '../../../container';
import {type Jwt} from '../../../core/client/domain/Jwt';
import {clientTypes} from '../../../core/client/infrastructure/ClientTypes';
import {successResponse} from '../../util/successResponse';

const jwt = container.get<Jwt>(clientTypes.jwt);

export function validateTokenController(req: Request<any, any, ValidateTokenDto>, res: Response) {
	try {
		const {token} = req.body;
		jwt.verify(token);

		return successResponse(res, {isValidToken: true});
	} catch (e) {
		return errorHandler(res, e as Error);
	}
}
