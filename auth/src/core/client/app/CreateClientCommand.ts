import {type Command} from 'shared-layer';

type Params = {
	id: string;
	name: string;
	lastname: string;
	email: string;
	password: string;
	birthday: string;
};

export class CreateClientCommand implements Command, Params {
	id: string;
	name: string;
	lastname: string;
	email: string;
	password: string;
	birthday: string;

	constructor({id, name, lastname, password, email, birthday}: Params) {
		this.id = id;
		this.name = name;
		this.lastname = lastname;
		this.email = email;
		this.password = password;
		this.birthday = birthday;
	}
}
