import {type Query} from '../../domain/bus/Query';
import {type QueryHandler} from '../../domain/bus/QueryHandler';
import {type Response} from '../../domain/bus/Response';
import {UnhandledQueryError} from '../../domain/error/UnhandledQueryError';

export class QueryHandlers extends Map<Query, QueryHandler<Query, Response>> {
	constructor(queryHandlers: Array<QueryHandler<Query, Response>>) {
		super();

		queryHandlers.forEach(queryHandler => {
			this.set(queryHandler.subscribeTo(), queryHandler);
		});
	}

	public get(query: Query): QueryHandler<Query, Response> {
		const queryHandler = super.get(query.constructor.name);

		if (!queryHandler) {
			throw new UnhandledQueryError();
		}

		return queryHandler;
	}
}
