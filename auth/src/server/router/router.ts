import {Router} from 'express';
import {registerClientController} from '../controller/registerClient/registerClientController';
import {validateBody} from '../middleware/validateBody';
import {registerClientSchema} from '../controller/registerClient/registerClientSchema';

const router = Router();

router.post('/register', validateBody(registerClientSchema), registerClientController);

export {
	router,
};
