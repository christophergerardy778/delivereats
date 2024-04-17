import {InMemoryQueryBus, QueryHandlers} from 'shared-layer';
import {container} from '../../../container';
import {type LoginClientByCredentialsQueryHandler} from '../app/LoginClientByCredentialsQueryHandler';
import {clientTypes} from './ClientTypes';

const loginClientByCredentialsQueryHandler = container.get<LoginClientByCredentialsQueryHandler>(
	clientTypes.loginClientQueryHandler,
);

const queryHandlers = new QueryHandlers([
	loginClientByCredentialsQueryHandler,
]);

export const queryBus = new InMemoryQueryBus(queryHandlers);
