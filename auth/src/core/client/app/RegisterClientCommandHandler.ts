import {type Command, type CommandHandler} from 'shared-layer';
import {CreateClientCommand} from './create/CreateClientCommand';
import {type CreateClient} from './create/CreateClient';
import {Client} from '../domain/Client';
import {ClientId} from '../domain/value-object/ClientId';
import {ClientName} from '../domain/value-object/ClientName';
import {ClientLastname} from '../domain/value-object/ClientLastname';
import {ClientEmail} from '../domain/value-object/ClientEmail';
import {ClientPassword} from '../domain/value-object/ClientPassword';
import {ClientBirthday} from '../domain/value-object/ClientBirthday';
import {ClientImg} from '../domain/value-object/ClientImg';
import {injectable} from 'inversify';

@injectable()
export class RegisterClientCommandHandler implements CommandHandler<CreateClientCommand> {
	constructor(private readonly createClient: CreateClient) {
	}

	subscribeTo(): Command {
		return CreateClientCommand;
	}

	async handle(command: CreateClientCommand): Promise<void> {
		const client = Client.create({
			id: ClientId.create(command.id),
			name: ClientName.create(command.name),
			lastname: ClientLastname.create(command.lastname),
			email: ClientEmail.create(command.email),
			password: ClientPassword.create(command.password),
			birthday: ClientBirthday.create(command.birthday),
			img: ClientImg.empty(),
		});

		await client.encryptPassword();

		await this.createClient.run(client);
	}
}
