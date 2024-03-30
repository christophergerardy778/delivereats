import {type Command} from './Command';

export type CommandHandler<T extends Command> = {
	handle(command: T): Promise<void>;
	subscribeTo(): Command;
};
