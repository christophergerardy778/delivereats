import {type Command} from './Command';

export type CommandBus = {
	dispatch(command: Command): Promise<void>;
};
