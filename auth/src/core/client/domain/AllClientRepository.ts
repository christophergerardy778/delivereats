import {type Client} from './Client';

export type AllClientRepository = {
	save(client: Client): Promise<void>;
};
