import {type Query} from 'shared-layer';

type Params = {
	email: string;
	password: string;
};

export class LoginClientByCredentialsQuery implements Query, Params {
	email: string;
	password: string;

	constructor({email, password}: Params) {
		this.email = email;
		this.password = password;
	}
}
