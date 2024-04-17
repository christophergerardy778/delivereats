import {ClientMother} from "../../domain/ClientMother";
import {mock} from "jest-mock-extended";
import {LoginClientByCredentials} from "../../../../../src/core/client/app/login/LoginClientByCredentials";
import {Jwt} from "../../../../../src/core/client/domain/Jwt";
import {PasswordEncryptor} from "../../../../../src/core/client/domain/PasswordEncryptor";
import {SearchClientByEmail} from "../../../../../src/core/client/app/search/SearchClientByEmail";
import isJwt from "is-jwt";
import {LoginByCredentialsDto} from "../../../../../src/core/client/app/login/LoginByCredentialsDto";
import {Client} from "../../../../../src/core/client/domain/Client";
import {InvalidCredentials} from "../../../../../src/core/client/domain/error/InvalidCredentials";

const jwt = new Jwt();
const passwordEncryptor = new PasswordEncryptor();
const client = ClientMother.random();
const clientInDB = Client.create({
	id: client.id,
	name: client.name,
	lastname: client.lastname,
	password: client.password,
	email: client.email,
	birthday: client.birthday,
	img: client.img,
});

const searchClientByEmail = mock<SearchClientByEmail>();

const loginClientByCredentials = new LoginClientByCredentials(
	jwt,
	passwordEncryptor,
	searchClientByEmail,
)

describe('Login client by credentials', () => {
	beforeAll(async() => {
		await clientInDB.encryptPassword();
		searchClientByEmail.run.mockReturnValue(Promise.resolve(clientInDB));
	})

	it('should return a valid token', async () => {
		const token = await loginClientByCredentials.run(client.email, client.password);
		expect(isJwt(token)).toBeTruthy();
	});

	it('should return a valid JWT with id, name, lastname, email, birthday in decoded token', async () => {
		const token = await loginClientByCredentials.run(client.email, client.password);
		const payload = jwt.verify<LoginByCredentialsDto>(token);

		expect(payload).toMatchObject(expect.objectContaining({
			id: expect.any(String),
			name: expect.any(String),
			lastname: expect.any(String),
			email: expect.any(String),
			birthday: expect.any(String),
		}));
	});

	it('should throw an error when credentials are wrong', async () => {
		await expect(loginClientByCredentials.run(client.email, clientInDB.password)).rejects.toThrow(InvalidCredentials);
	});
})