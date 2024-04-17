import {type Query, type QueryHandler} from 'shared-layer';
import {LoginClientByCredentialsQuery} from './login/LoginClientByCredentialsQuery';
import {type LoginClientByCredentialsResponse} from './login/LoginClientByCredentialsResponse';
import {inject, injectable} from 'inversify';
import {LoginClientByCredentials} from './login/LoginClientByCredentials';
import {ClientEmail} from '../domain/value-object/ClientEmail';
import {ClientPassword} from '../domain/value-object/ClientPassword';
import {clientTypes} from '../infrastructure/ClientTypes';

@injectable()
export class LoginClientByCredentialsQueryHandler implements QueryHandler<LoginClientByCredentialsQuery, LoginClientByCredentialsResponse> {
	constructor(@inject(clientTypes.loginClientByCredentials) private readonly loginByCredentials: LoginClientByCredentials) {
	}

	subscribeTo(): Query {
		return LoginClientByCredentialsQuery;
	}

	async handle(query: LoginClientByCredentialsQuery): Promise<LoginClientByCredentialsResponse> {
		const token = await this.loginByCredentials.run(
			ClientEmail.create(query.email),
			ClientPassword.create(query.password),
		);

		return {token};
	}
}
