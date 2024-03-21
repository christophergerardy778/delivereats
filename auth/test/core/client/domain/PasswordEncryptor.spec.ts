import {EncryptPassword} from "shared-layer";
import {PasswordEncryptor} from "../../../../src/core/client/domain/PasswordEncryptor";

const password = 'myPassword';
const passwordEncryptor: EncryptPassword = new PasswordEncryptor();

describe('Password encryptor', () => {
	it('should encrypt a password', async () => {
		const passwordEncrypted = passwordEncryptor.encrypt(password);
		expect(passwordEncrypted).not.toEqual(password);
	});

	it('should return true when password is correct', async () => {
		const passwordEncrypted = await passwordEncryptor.encrypt(password);
		await expect(passwordEncryptor.compare(password, passwordEncrypted)).resolves.toBeTruthy();
	});

	it('should return false when password is wrong', async () => {
		const passwordEncrypted = await passwordEncryptor.encrypt(password);
		await expect(passwordEncryptor.compare('wrong password', passwordEncrypted)).resolves.toBeFalsy()
	});
});