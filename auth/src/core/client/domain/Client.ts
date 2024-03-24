import {type ClientId} from './value-object/ClientId';
import {type ClientName} from './value-object/ClientName';
import {type ClientLastname} from './value-object/ClientLastname';
import {type ClientEmail} from './value-object/ClientEmail';
import {ClientPassword} from './value-object/ClientPassword';
import {type ClientBirthday} from './value-object/ClientBirthday';
import {type ClientImg} from './value-object/ClientImg';
import {PasswordEncryptor} from './PasswordEncryptor';

export class Client {
	public static create(params: {
		id: ClientId;
		name: ClientName;
		lastname: ClientLastname;
		email: ClientEmail;
		password: ClientPassword;
		birthday: ClientBirthday;
		img: ClientImg;
	}): Client {
		const client = new Client();

		client.id = params.id;
		client.name = params.name;
		client.lastname = params.lastname;
		client.email = params.email;
		client.password = params.password;
		client.birthday = params.birthday;
		client.img = params.img;

		return client;
	}

	public id!: ClientId;

	public name!: ClientName;

	public lastname!: ClientLastname;

	public email!: ClientEmail;

	public password!: ClientPassword;

	public birthday!: ClientBirthday;

	public img!: ClientBirthday;

	private readonly passwordEncryptor = new PasswordEncryptor();

	public async encryptPassword(): Promise<void> {
		const passwordEncrypted = await this.passwordEncryptor.encrypt(this.password.value);
		this.password = ClientPassword.create(passwordEncrypted);
	}
}
