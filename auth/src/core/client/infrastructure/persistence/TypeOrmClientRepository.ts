import {type AllClientRepository} from '../../domain/AllClientRepository';
import {type Client} from '../../domain/Client';
import {type ClientEmail} from '../../domain/value-object/ClientEmail';
import {appDataSource} from '../../../../server/datasource';
import {clientEntity} from './ClientEntity';
import {injectable} from 'inversify';

@injectable()
export class TypeOrmClientRepository implements AllClientRepository {
	private readonly repository = appDataSource.getRepository(clientEntity);

	async save(client: Client): Promise<void> {
		await this.repository.save(client);
	}

	async findByEmail(email: ClientEmail): Promise<Client | undefined> {
		const client = await this.repository.findOneBy({
			email: email.value,
		});

		if (!client) {
			return undefined;
		}

		return client;
	}
}
