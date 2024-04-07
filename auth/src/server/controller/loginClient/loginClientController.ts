import {type Request, type Response} from 'express';
import {emptySuccessResponse} from '../../util/emptySuccessResponse';
import {errorHandler} from '../../util/errorHandler';
import {type LoginClientDto} from './loginClientDto';

export async function loginClientController(req: Request<any, any, LoginClientDto>, res: Response) {
	try {
		return emptySuccessResponse(res);
	} catch (e) {
		return errorHandler(res, e as Error);
	}
}
