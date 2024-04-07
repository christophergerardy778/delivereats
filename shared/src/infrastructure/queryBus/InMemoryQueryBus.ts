import {type QueryBus} from '../../domain/bus/QueryBus';
import {type Response} from '../../domain/bus/Response';
import {type Query} from '../../domain/bus/Query';
import {type QueryHandlers} from './QueryHandlers';

export class InMemoryQueryBus implements QueryBus {
	constructor(private readonly queryHandlers: QueryHandlers) {}

	async ask<T extends Response>(query: Query): Promise<T> {
		const handler = this.queryHandlers.get(query);
		const result = await handler.handle(query);
		return result as T;
	}
}
