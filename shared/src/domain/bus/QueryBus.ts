import {type Query} from './Query';

export type QueryBus = {
	ask<T>(query: Query): Promise<T>;
};
