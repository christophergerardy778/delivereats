import {type Client} from './Client';
import {type ClientEmail} from './value-object/ClientEmail';

export type AllClientRepository = {
	save(client: Client): Promise<void>;
	findByEmail(email: ClientEmail): Promise<Client | undefined>;
};
