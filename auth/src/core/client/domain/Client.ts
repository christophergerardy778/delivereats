import {type ClientId} from './value-object/ClientId';
import {type ClientName} from './value-object/ClientName';
import {type ClientLastname} from './value-object/ClientLastname';
import {type ClientEmail} from './value-object/ClientEmail';
import {ClientPassword} from './value-object/ClientPassword';
import {type ClientBirthday} from './value-object/ClientBirthday';
import {Column, Entity, PrimaryColumn} from 'typeorm';
import {type ClientImg} from './value-object/ClientImg';
import {PasswordEncryptor} from './PasswordEncryptor';

@Entity()
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

	@PrimaryColumn({
		type: 'varchar',
		length: 20,
	})
	public id!: ClientId;

	@Column({
		type: 'varchar',
		length: 20,
	})
	public name!: ClientName;

	@Column({
		type: 'varchar',
		length: 20,
	})
	public lastname!: ClientLastname;

	@Column({
		type: 'varchar',
		length: 50,
		unique: true,
	})
	public email!: ClientEmail;

	@Column({
		type: 'varchar',
		length: 50,
	})
	public password!: ClientPassword;

	@Column({
		type: 'date',
	})
	public birthday!: ClientBirthday;

	@Column({
		type: 'varchar',
		length: 20,
	})
	public img!: ClientBirthday;

	private readonly passwordEncryptor = new PasswordEncryptor();

	public async encryptPassword(): Promise<void> {
		const passwordEncrypted = await this.passwordEncryptor.encrypt(this.password.value);
		this.password = ClientPassword.create(passwordEncrypted);
	}
}
