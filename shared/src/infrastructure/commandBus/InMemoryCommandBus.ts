import {type CommandBus} from '../../domain/bus/CommandBus';
import {type CommandHandlers} from '../../domain/bus/CommandHandlers';
import {type Command} from '../../domain/bus/Command';

export class InMemoryCommandBus implements CommandBus {
	constructor(private readonly commandHandlers: CommandHandlers) {}

	async dispatch(command: Command): Promise<void> {
		const commandHandler = this.commandHandlers.get(command);
		await commandHandler.handle(command);
	}
}
