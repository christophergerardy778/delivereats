import {ClientMother} from "../../domain/ClientMother";
import {container} from "../../../../../src/container";
import {AllClientRepository} from "../../../../../src/core/client/domain/AllClientRepository";
import {clientTypes} from "../../../../../src/core/client/infrastructure/ClientTypes";
import {Connection} from "../../../../../src/core/client/infrastructure/persistence/Connection";
import {types} from "../../../../../src/core/client/infrastructure/Types";

const client = ClientMother.random();
const connection = container.get<Connection>(types.connection);
const allClientsRepository = container.get<AllClientRepository>(clientTypes.allClientsRepository);

describe('Typeorm client repository', () => {
	beforeAll(async () => {
		await connection.connect();
	})

	afterEach(async() => {
		await allClientsRepository.deleteById(client.id);
	})

	afterAll(async () => {
		await connection.disconnect();
	})

	it('should save a client in database', async () => {
		await allClientsRepository.save(client);
		const clientInDb = await allClientsRepository.findByEmail(client.email);
		expect(clientInDb).not.toBeUndefined()
	});

	it('should recover a client by email in database', async () => {
		await allClientsRepository.save(client);
		const clientInDb = await allClientsRepository.findByEmail(client.email);
		expect(clientInDb.id.value).toEqual(client.id.value);
	});

	it('should recover a client by id in database', async () => {
		await allClientsRepository.save(client);
		const clientInDb = await allClientsRepository.findById(client.id);
		expect(clientInDb).not.toBeUndefined();
	})
});