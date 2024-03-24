import {EntitySchema} from 'typeorm';
import {Client} from '../domain/Client';
import {typeOrmValueObjectTransformer} from 'shared-layer';
import {ClientId} from '../domain/value-object/ClientId';

export const clientEntity = new EntitySchema<Client>({
	name: 'Client',
	tableName: 'clients',
	target: Client,
	columns: {
		id: {
			type: 'varchar',
			primary: true,
			transformer: typeOrmValueObjectTransformer(ClientId),
		},
	},
});
