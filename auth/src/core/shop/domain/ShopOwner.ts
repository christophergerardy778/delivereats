import {type ShopOwnerId} from './value-object/ShopOwnerId';
import {type ShopOwnerName} from './value-object/ShopOwnerName';
import {type ShopOwnerLastname} from './value-object/ShopOwnerLastname';
import {type ShopOwnerEmail} from './value-object/ShopOwnerEmail';
import {type ShopOwnerPassword} from './value-object/ShopOwnerPassword';
import {type ShopOwnerBirthday} from './value-object/ShopOwnerBirthday';

export class ShopOwner {
	public id!: ShopOwnerId;
	public name!: ShopOwnerName;
	public lastname!: ShopOwnerLastname;
	public email!: ShopOwnerEmail;
	public password!: ShopOwnerPassword;
	public birthday!: ShopOwnerBirthday;

	public static create(params: {
		id: ShopOwnerId;
		name: ShopOwnerName;
		lastname: ShopOwnerLastname;
		email: ShopOwnerEmail;
		password: ShopOwnerPassword;
		birthday: ShopOwnerBirthday;
	}): ShopOwner {
		const shopOwner = new ShopOwner();

		shopOwner.id = params.id;
		shopOwner.name = params.name;
		shopOwner.lastname = params.lastname;
		shopOwner.email = params.email;
		shopOwner.password = params.password;
		shopOwner.birthday = params.birthday;

		return shopOwner;
	}
}
