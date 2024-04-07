import {type Response} from 'express';
import {ClientEmailAlreadyInUse} from '../../core/client/domain/error/ClientEmailAlreadyInUse';
import {internalServerErrorResponse} from './internalServerErrorResponse';
import {conflictResponse} from './conflictResponse';

export function errorHandler(res: Response, error: Error) {
	const errors = new Map<string, () => void>();

	errors.set(ClientEmailAlreadyInUse.name, () => conflictResponse(res, error.message));

	const handler = errors.get(error.constructor.name);

	if (!handler) {
		return internalServerErrorResponse(res);
	}

	handler();
}
