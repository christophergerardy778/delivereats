import {type Response} from 'express';
import {HTTP_STATUS_NOT_FOUND} from './contants';

export function notFoundResponse(res: Response, error: string) {
	return res.status(HTTP_STATUS_NOT_FOUND).json({message: error});
}
