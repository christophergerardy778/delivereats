import {type Response} from 'express';
import {HTTP_STATUS_OK_RESPONSE} from './contants';

export function emptySuccessResponse(res: Response) {
	return res.status(HTTP_STATUS_OK_RESPONSE).send();
}
