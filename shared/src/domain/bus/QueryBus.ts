import {type Query} from './Query';
import {type Response} from './Response';

export type QueryBus = {
	ask<T extends Response>(query: Query): Promise<T>;
};
