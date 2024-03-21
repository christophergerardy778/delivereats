export class InvalidJsonWebTokenError extends Error {
	constructor() {
		super('Invalid json web token');
	}
}
