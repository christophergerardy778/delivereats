import {type Response} from 'express';
import {HTTP_STATUS_BAD_RESPONSE} from './contants';

export function badRequestResponse(res: Response, message = 'BAD_REQUEST') {
	return res.status(HTTP_STATUS_BAD_RESPONSE).json({message});
}
