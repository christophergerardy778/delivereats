import {SearchClientByEmail} from "../../../../../src/core/client/app/search/SearchClientByEmail";
import {allClientsMock} from "../../mock/AllClientsMock";
import {SearchClientEmailAlreadyInUse} from "../../../../../src/core/client/app/search/SearchClientEmailAlreadyInUse";
import {ClientMother} from "../../domain/ClientMother";
import {mockReset} from "jest-mock-extended";

const client = ClientMother.random();
const searchClientByEmail = new SearchClientByEmail(allClientsMock);
const searchClientEmailAlreadyInUse = new SearchClientEmailAlreadyInUse(searchClientByEmail);

describe('Client email already in use', () => {
	beforeEach(() => {
		mockReset(allClientsMock);
	})

	it('should return true when client email is already registered', async () => {
		allClientsMock.findByEmail.mockReturnValue(Promise.resolve(client));
		const isEmailAlreadyInUse = await searchClientEmailAlreadyInUse.run(client.email);
		expect(isEmailAlreadyInUse).toBeTruthy();
	});

	it('should return false when client email is not registered', async () => {
		allClientsMock.findByEmail.mockReturnValue(Promise.resolve(undefined));
		const isEmailAlreadyInUse = await searchClientEmailAlreadyInUse.run(client.email);
		expect(isEmailAlreadyInUse).toBeFalsy();
	});
})