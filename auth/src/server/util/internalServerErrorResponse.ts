import {type Response} from 'express';
import {HTTP_STATUS_INTERNAL_SERVER_ERROR} from './contants';

export function internalServerErrorResponse(res: Response) {
	return res.status(HTTP_STATUS_INTERNAL_SERVER_ERROR).send();
}
