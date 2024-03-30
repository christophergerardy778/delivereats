import {DataSource} from 'typeorm';
import {Client} from '../core/client/domain/Client';
import {clientEntity} from '../core/client/infrastructure/persistence/ClientEntity';

export const appDataSource = new DataSource({
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	type: process.env.DATABASE_TYPE! as any,
	host: 'localhost',
	port: process.env.DATABASE_PORT! as unknown as number,
	username: process.env.DATABASE_USER!,
	password: process.env.DATABASE_PASSWORD,
	database: process.env.DATABASE_NAME!,
	synchronize: true,
	logging: false,
	entities: [clientEntity],
});
