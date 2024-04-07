import {type SearchClientByEmail} from './SearchClientByEmail';
import {type ClientEmail} from '../../domain/value-object/ClientEmail';
import {inject, injectable} from 'inversify';
import {clientTypes} from '../../infrastructure/ClientTypes';

@injectable()
export class SearchClientEmailAlreadyInUse {
	constructor(
		@inject(clientTypes.searchClientByEmail) private readonly searchClientByEmail: SearchClientByEmail) {}

	public async run(clientEmail: ClientEmail): Promise<boolean> {
		try {
			await this.searchClientByEmail.run(clientEmail);
			return true;
		} catch (e) {
			return false;
		}
	}
}
