export type EncryptPassword = {
	encrypt(password: string): Promise<string>;
	compare(password: string, hashToCompare: string): Promise<boolean>;
};
