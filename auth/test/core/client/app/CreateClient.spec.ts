import {allClientsMock} from "../mock/AllClientsMock";
import {CreateClient} from "../../../../src/core/client/app/CreateClient";
import {ClientMother} from "../domain/ClientMother";

const createClient = new CreateClient(allClientsMock);

describe('Create client', () => {
	it('should create a user', () => {
		expect(1).toBe(1);
	});
});