import {type Query} from './Query';
import {type Response} from './Response';

export type QueryHandler<T extends Query, R extends Response> = {
	handle(query: T): Promise<R>;
	subscribeTo(): Query;
};
