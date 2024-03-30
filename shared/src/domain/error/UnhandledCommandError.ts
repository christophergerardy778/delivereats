export class UnhandledCommandError extends Error {
	constructor() {
		super('Unhandled command');
	}
}
