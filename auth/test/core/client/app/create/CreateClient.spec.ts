import {allClientsMock} from "../../mock/AllClientsMock";
import {CreateClient} from "../../../../../src/core/client/app/create/CreateClient";
import {ClientMother} from "../../domain/ClientMother";
import {SearchClientEmailAlreadyInUse} from "../../../../../src/core/client/app/search/SearchClientEmailAlreadyInUse";
import {SearchClientByEmail} from "../../../../../src/core/client/app/search/SearchClientByEmail";
import {mockReset} from "jest-mock-extended";
import {ClientEmailAlreadyInUse} from "../../../../../src/core/client/domain/error/ClientEmailAlreadyInUse";

const client = ClientMother.random();
const searchClientByEmail = new SearchClientByEmail(allClientsMock);
const searchClientEmailAlreadyInUse = new SearchClientEmailAlreadyInUse(searchClientByEmail);

const createClient = new CreateClient(allClientsMock, searchClientEmailAlreadyInUse);

describe('Create client', () => {
	beforeEach(() => {
		mockReset(allClientsMock);
	});

	it('should create a user', async () => {
		await createClient.run(client);
		expect(allClientsMock.save).toHaveBeenCalled();
	});

	it('should throw a email already in use if email is already taken', async () => {
		allClientsMock.findByEmail.mockReturnValue(Promise.resolve(ClientMother.random()));
		await expect(createClient.run(client)).rejects.toThrow(ClientEmailAlreadyInUse);
	})
});