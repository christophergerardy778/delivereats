import {Jwt} from "../../../../src/core/client/domain/Jwt";
// @ts-ignore
import isJwt from "is-jwt";

const payload = {
	id: 1,
	user: 'Christopher Gerardy',
}

const jwt = new Jwt();

describe('Json web token', () => {
	it('should return a jwt', () => {
		// const token = jwt.sign(payload);
		expect(isJwt("token")).toBeTruthy();
	});

	it('should return payload when token is ok', () => {
		
	});

	it('should throw invalid json web token error when token is wrong', () => {
		
	});
})