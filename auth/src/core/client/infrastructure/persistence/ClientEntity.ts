import {EntitySchema} from 'typeorm';
import {Client} from '../../domain/Client';
import {typeOrmValueObjectTransformer} from 'shared-layer';
import {ClientId} from '../../domain/value-object/ClientId';
import {ClientName} from '../../domain/value-object/ClientName';
import {ClientLastname} from '../../domain/value-object/ClientLastname';
import {ClientEmail} from '../../domain/value-object/ClientEmail';
import {ClientPassword} from '../../domain/value-object/ClientPassword';
import {ClientImg} from '../../domain/value-object/ClientImg';
import {ClientBirthday} from '../../domain/value-object/ClientBirthday';

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
		name: {
			type: 'varchar',
			length: 40,
			transformer: typeOrmValueObjectTransformer(ClientName),
		},
		lastname: {
			type: 'varchar',
			length: 40,
			transformer: typeOrmValueObjectTransformer(ClientLastname),
		},
		email: {
			type: 'varchar',
			length: 60,
			transformer: typeOrmValueObjectTransformer(ClientEmail),
			unique: true,
		},
		password: {
			type: 'varchar',
			length: 100,
			transformer: typeOrmValueObjectTransformer(ClientPassword),
		},
		img: {
			type: 'varchar',
			length: 200,
			transformer: typeOrmValueObjectTransformer(ClientImg),
			default: '',
		},
		birthday: {
			type: 'date',
			transformer: typeOrmValueObjectTransformer(ClientBirthday),
		},
	},
});
