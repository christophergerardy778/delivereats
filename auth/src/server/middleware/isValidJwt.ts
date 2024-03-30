import {type NextFunction, type Request, type Response} from 'express';
import {container} from '../../container';
import {type Jwt} from '../../core/client/domain/Jwt';
import {types} from '../../core/client/infrastructure/Types';

export function isValidJwt(req: Request, res: Response, next: NextFunction) {
	const authorizationHeader = req.headers.authorization;

	if (!authorizationHeader) {
		return res.status(401)
			.json({
				message: 'Unauthorized',
			});
	}

	const jwt = container.get<Jwt>(types.jwt);

	const isValidJwt = jwt.isValid(authorizationHeader);

	if (!isValidJwt) {
		return res.status(401)
			.json({
				message: 'Unauthorized',
			});
	}

	next();
}
