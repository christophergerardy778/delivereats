import {type SearchClientByEmail} from './SearchClientByEmail';
import {type ClientEmail} from '../../domain/value-object/ClientEmail';

export class SearchClientEmailAlreadyInUse {
	constructor(private readonly searchClientByEmail: SearchClientByEmail) {
	}

	public async run(clientEmail: ClientEmail): Promise<boolean> {
		try {
			await this.searchClientByEmail.run(clientEmail);
			return true;
		} catch (e) {
			return false;
		}
	}
}
