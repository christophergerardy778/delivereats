import {Jwt} from "../../../../src/core/client/domain/Jwt";
import isJwt from "is-jwt";
import {InvalidJsonWebTokenError} from "../../../../src/core/client/domain/error/InvalidJsonWebTokenError";

const payload = {
	id: 1,
	user: 'Christopher Gerardy',
}

const jwt = new Jwt();

describe('Json web token', () => {
	it('should return a valid jwt', () => {
		const token = jwt.sign(payload);
		expect(isJwt(token)).toBeTruthy();
	});

	it('should return payload when token is ok', () => {
		const token = jwt.sign(payload);
		expect(jwt.verify(token)).toMatchObject(payload);
	});

	it('should throw a invalid json web token error when token is wrong', () => {
		expect(() => jwt.verify("wrong token")).toThrow(InvalidJsonWebTokenError);
	});

	it('should return true when token is valid', () => {
		const token = jwt.sign(payload);
		expect(jwt.isValid(token)).toBeTruthy();
	});

	it('should return false when token is invalid', () => {
		expect(jwt.isValid("wrong token")).toBeFalsy();
	});
})