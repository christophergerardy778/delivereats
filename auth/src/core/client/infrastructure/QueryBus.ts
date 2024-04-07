import {InMemoryQueryBus, QueryHandlers} from 'shared-layer';

const queryHandlers = new QueryHandlers([]);

export const queryBus = new InMemoryQueryBus(queryHandlers);
