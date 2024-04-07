import {type Request, type Response} from 'express';
import {CreateClientCommand} from '../../../core/client/app/create/CreateClientCommand';
import {type RegisterClientDto} from './registerClientDto';
import {commandBus} from '../../../core/client/infrastructure/CommandBus';
import {emptySuccessResponse} from '../../util/emptySuccessResponse';
import {errorHandler} from '../../util/errorHandler';
import {v4 as uuid} from 'uuid';

export async function registerClientController(req: Request<any, any, RegisterClientDto>, res: Response) {
	try {
		const createClientCommand = new CreateClientCommand({
			id: uuid(),
			...req.body,
		});

		await commandBus.dispatch(createClientCommand);

		return emptySuccessResponse(res);
	} catch (e) {
		errorHandler(res, e as Error);
	}
}
