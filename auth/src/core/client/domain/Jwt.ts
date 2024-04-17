import jsonWebToken, {type JwtPayload} from 'jsonwebtoken';
import {InvalidJsonWebTokenError} from './error/InvalidJsonWebTokenError';
import {injectable} from 'inversify';

@injectable()
export class Jwt {
	public sign<T extends Record<string, unknown>>(payload: T): string {
		return jsonWebToken.sign(payload, process.env.JSON_WEB_TOKEN_KEY!);
	}

	public verify<T extends JwtPayload>(token: string): T {
		try {
			return jsonWebToken.verify(token, process.env.JSON_WEB_TOKEN_KEY!) as T;
		} catch (e) {
			throw new InvalidJsonWebTokenError();
		}
	}

	public isValid(token: string): boolean {
		try {
			this.verify(token);
			return true;
		} catch (e) {
			return false;
		}
	}
}
