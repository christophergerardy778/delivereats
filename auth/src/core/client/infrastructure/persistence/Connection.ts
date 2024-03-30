import {injectable} from 'inversify';
import {
	DataSource,
	type EntityTarget,
	type ObjectLiteral,
} from 'typeorm';
import {clientEntity} from './ClientEntity';

@injectable()
export class Connection {
	private readonly appDataSource = new DataSource({
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		type: process.env.DATABASE_TYPE! as any,
		host: 'localhost',
		port: process.env.DATABASE_PORT! as unknown as number,
		username: process.env.DATABASE_USER!,
		password: process.env.DATABASE_PASSWORD,
		database: process.env.DATABASE_NAME!,
		synchronize: true,
		logging: false,
		entities: [
			clientEntity,
		],
	});

	public getRepository<T extends ObjectLiteral>(entity: EntityTarget<T>) {
		return this.appDataSource.getRepository<T>(entity);
	}

	public async connect() {
		await this.appDataSource.initialize();
	}

	public async disconnect() {
		await this.appDataSource.destroy();
	}
}
