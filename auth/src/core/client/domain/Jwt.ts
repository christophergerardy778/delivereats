import jsonWebToken, {type JwtPayload} from 'jsonwebtoken';
import {InvalidJsonWebTokenError} from './error/InvalidJsonWebTokenError';

export class Jwt {
	public sign<T extends Record<string, unknown>>(payload: T) {
		return jsonWebToken.sign(payload, process.env.JSON_WEB_TOKEN_KEY!);
	}

	public verify<T extends JwtPayload>(token: string): T {
		try {
			return jsonWebToken.verify(token, process.env.JSON_WEB_TOKEN_KEY!) as T;
		} catch (e) {
			throw new InvalidJsonWebTokenError();
		}
	}
}
