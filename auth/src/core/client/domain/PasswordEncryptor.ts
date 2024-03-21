import {compare, genSalt, hash} from 'bcryptjs';
import {type EncryptPassword} from 'shared-layer';

export class PasswordEncryptor implements EncryptPassword {
	private get rounds() {
		return 10;
	}

	public async encrypt(password: string): Promise<string> {
		const salt = await genSalt(this.rounds);
		return hash(password, salt);
	}

	public async compare(password: string, hashedPassword: string): Promise<boolean> {
		return compare(password, hashedPassword);
	}
}
