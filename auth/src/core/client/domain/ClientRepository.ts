import {type Client} from './Client';

export type ClientRepository = {
	save(client: Client): Promise<void>;
};
