import {inject, injectable} from 'inversify';
import {SearchClientByEmail} from '../search/SearchClientByEmail';
import {clientTypes} from '../../infrastructure/ClientTypes';
import {type ClientEmail} from '../../domain/value-object/ClientEmail';
import {type ClientPassword} from '../../domain/value-object/ClientPassword';
import {EncryptPassword} from 'shared-layer';
import {Jwt} from '../../domain/Jwt';
import {InvalidCredentials} from '../../domain/error/InvalidCredentials';
import {type LoginByCredentialsDto} from './LoginByCredentialsDto';

@injectable()
export class LoginClientByCredentials {
	constructor(
		@inject(clientTypes.jwt) private readonly jwt: Jwt,
		@inject(clientTypes.passwordEncryptor) private readonly passwordEncryptor: EncryptPassword,
		@inject(clientTypes.searchClientByEmail) private readonly searchClientByEmail: SearchClientByEmail) {
	}

	public async run(clientEmail: ClientEmail, clientPassword: ClientPassword): Promise<string> {
		const client = await this.searchClientByEmail.run(clientEmail);

		const isClientCredentialsOk = await this.passwordEncryptor.compare(
			clientPassword.value,
			client.password.value,
		);

		if (!isClientCredentialsOk) {
			throw new InvalidCredentials();
		}

		return this.jwt.sign<LoginByCredentialsDto>({
			id: client.id.value,
			name: client.name.value,
			lastname: client.lastname.value,
			email: client.email.value,
			birthday: client.birthday.value,
		});
	}
}
