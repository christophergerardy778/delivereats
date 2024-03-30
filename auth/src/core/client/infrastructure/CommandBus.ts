import {CommandHandlers, InMemoryCommandBus} from 'shared-layer';
import {container} from '../../../container';
import {clientTypes} from './ClientTypes';
import {type RegisterClientCommandHandler} from '../app/RegisterClientCommandHandler';

const registerClientCommandHandler: RegisterClientCommandHandler = container.get(clientTypes.registerClientCommandHandler);

const commandHandlers = new CommandHandlers([
	registerClientCommandHandler,
]);

export const commandBus: InMemoryCommandBus = new InMemoryCommandBus(commandHandlers);
