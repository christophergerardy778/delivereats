import {type Command} from './Command';
import {type CommandHandler} from './CommandHandler';
import {UnhandledCommandError} from '../error/UnhandledCommandError';

export class CommandHandlers extends Map<Command, CommandHandler<Command>> {
	constructor(commandHandlers: Array<CommandHandler<Command>>) {
		super();

		commandHandlers.forEach(commandHandler => {
			this.set(commandHandler.subscribeTo(), commandHandler);
		});
	}

	public get(command: Command): CommandHandler<Command> {
		const commandHandler = super.get(command.constructor);

		if (!commandHandler) {
			throw new UnhandledCommandError();
		}

		return commandHandler;
	}
}
