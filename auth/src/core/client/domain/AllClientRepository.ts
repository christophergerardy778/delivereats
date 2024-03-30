import {type Client} from './Client';
import {type ClientEmail} from './value-object/ClientEmail';
import {type ClientId} from './value-object/ClientId';

export type AllClientRepository = {
	save(client: Client): Promise<void>;
	findById(id: ClientId): Promise<Client | undefined>;
	findByEmail(email: ClientEmail): Promise<Client | undefined>;
	deleteById(id: ClientId): Promise<void>;
};
