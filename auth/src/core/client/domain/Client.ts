import {type ClientId} from './value-object/ClientId';
import {type ClientName} from './value-object/ClientName';
import {type ClientLastname} from './value-object/ClientLastname';
import {type ClientEmail} from './value-object/ClientEmail';
import {type ClientPassword} from './value-object/ClientPassword';
import {type ClientBirthday} from './value-object/ClientBirthday';
import {Column, Entity, PrimaryColumn} from 'typeorm';

@Entity()
export class Client {
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
}
