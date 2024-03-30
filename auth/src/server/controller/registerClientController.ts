import {type Request, type Response} from 'express';

export function registerClientController(req: Request, res: Response) {
	try {
		res.status(200)
			.send({
				ok: true,
			});
	} catch (e) {

	}
}
