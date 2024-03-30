import {type AllClientRepository} from '../../domain/AllClientRepository';
import {Client} from '../../domain/Client';
import {type ClientEmail} from '../../domain/value-object/ClientEmail';
import {inject, injectable} from 'inversify';
import {type ClientId} from '../../domain/value-object/ClientId';
import {type Repository} from 'typeorm';
import {Connection} from './Connection';
import {types} from '../Types';

@injectable()
export class TypeOrmClientRepository implements AllClientRepository {
	public readonly repository!: Repository<Client>;

	constructor(@inject(types.connection) public readonly connection: Connection) {
		this.repository = this.connection.getRepository(Client);
	}

	async findById(id: ClientId): Promise<Client | undefined> {
		const client = await this.repository.findOne({
			where: {
				id,
			},
		});

		if (!client) {
			return undefined;
		}

		return client;
	}

	async save(client: Client): Promise<void> {
		await this.repository.save(client);
	}

	async findByEmail(email: ClientEmail): Promise<Client | undefined> {
		const client = await this.repository.findOne({
			where: {email},
		});

		if (!client) {
			return undefined;
		}

		return client;
	}

	async deleteById(id: ClientId): Promise<void> {
		await this.repository.delete({
			id,
		});
	}
}
