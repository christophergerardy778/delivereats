import {type Response} from 'express';
import {HTTP_STATUS_CONFLICT} from './contants';

export function conflictResponse(res: Response, error: string) {
	return res.status(HTTP_STATUS_CONFLICT).json({message: error});
}
