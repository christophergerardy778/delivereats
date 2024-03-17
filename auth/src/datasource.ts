import {DataSource} from 'typeorm';
import {User} from './user/domain/User';

export const appDataSource = new DataSource({
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	type: process.env.DATABASE_TYPE! as any,
	host: 'localhost',
	port: process.env.DATABASE_PORT! as unknown as number,
	username: process.env.DATABASE_USER!,
	password: process.env.DATABASE_PASSWORD,
	database: process.env.auth_db!,
	synchronize: true,
	logging: true,
	entities: [User],
});
