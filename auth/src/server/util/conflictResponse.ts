import {type Response} from 'express';
import {HTTP_STATUS_OK_CONFLICT} from './contants';

export function conflictResponse(res: Response, error: string) {
	return res.status(HTTP_STATUS_OK_CONFLICT).json({message: error});
}
