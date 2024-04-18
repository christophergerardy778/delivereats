import {type Response} from 'express';
import {ClientEmailAlreadyInUse} from '../../core/client/domain/error/ClientEmailAlreadyInUse';
import {internalServerErrorResponse} from './internalServerErrorResponse';
import {conflictResponse} from './conflictResponse';
import {InvalidCredentials} from '../../core/client/domain/error/InvalidCredentials';
import {ClientNotFoundError} from '../../core/client/domain/error/ClientNotFoundError';
import {notFoundResponse} from './notFoundResponse';
import {InvalidJsonWebTokenError} from '../../core/client/domain/error/InvalidJsonWebTokenError';
import {unauthorizedResponse} from './unauthorizedResponse';

export function errorHandler(res: Response, error: Error) {
	const errors = new Map<string, () => void>();

	errors.set(ClientEmailAlreadyInUse.name, () => conflictResponse(res, error.message));
	errors.set(InvalidCredentials.name, () => conflictResponse(res, error.message));
	errors.set(ClientNotFoundError.name, () => notFoundResponse(res, error.message));
	errors.set(InvalidJsonWebTokenError.name, () => unauthorizedResponse(res, error.message));

	const handler = errors.get(error.constructor.name);

	if (!handler) {
		return internalServerErrorResponse(res);
	}

	handler();
}
