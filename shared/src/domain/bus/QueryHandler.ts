import {type Query} from './Query';

export type QueryHandler<T extends Query, R> = {
	handle(query: T): R;
};
