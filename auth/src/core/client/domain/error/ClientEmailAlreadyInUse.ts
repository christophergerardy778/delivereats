export class ClientEmailAlreadyInUse extends Error {
	constructor() {
		super('Client email already in use');
	}
}
