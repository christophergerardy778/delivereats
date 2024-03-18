import {SearchClientByEmail} from "../../../../../src/core/client/app/search/SearchClientByEmail";
import {allClientsMock} from "../../mock/AllClientsMock";
import {ClientMother} from "../../domain/ClientMother";
import {mockReset} from "jest-mock-extended";
import {ClientNotFoundError} from "../../../../../src/core/client/domain/error/ClientNotFoundError";

const client = ClientMother.random();
const searchClientByEmail = new SearchClientByEmail(allClientsMock);

describe('Search client by email', () => {
	beforeEach(() => {
		mockReset(allClientsMock);
	});

	it('should find a client with email', async () => {
		allClientsMock.findByEmail.mockImplementation(async () => client);
		await searchClientByEmail.run(client.email);

		expect(allClientsMock.findByEmail).toHaveBeenCalled();
	});

	it('should throw exception when client does not exist', async () => {
		allClientsMock.findByEmail.mockImplementation(async () => undefined);

		await expect(searchClientByEmail.run(client.email)).rejects.toThrow(ClientNotFoundError);
	});
});