export type UserRepository = {
	findById(id: string): Promise<any>;
};
