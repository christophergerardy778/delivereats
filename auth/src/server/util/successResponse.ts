import type {Response} from 'express';
import {HTTP_STATUS_OK_RESPONSE} from './contants';

export function successResponse<T>(res: Response, data: T) {
	return res.status(HTTP_STATUS_OK_RESPONSE).send(data);
}
