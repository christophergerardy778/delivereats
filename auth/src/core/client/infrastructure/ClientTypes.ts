export const clientTypes = {
	registerClientCommandHandler: Symbol('registerClientCommandHandler'),
	allClientsRepository: Symbol('allClientsRepository'),
	createClient: Symbol('createClient'),
	searchClientByEmail: Symbol('searchClientByEmail'),
	searchClientEmailAlreadyInUse: Symbol('searchClientEmailAlreadyInUse'),
	loginClientByCredentials: Symbol('loginClientByCredentials'),
	passwordEncryptor: Symbol('passwordEncryptor'),
	jwt: Symbol('jwt'),
	loginClientQueryHandler: Symbol('loginClientQueryHandler'),
};
