import {Router} from 'express';

import {registerClientController} from '../controller/registerClient/registerClientController';
import {loginClientController} from '../controller/loginClient/loginClientController';

import {registerClientSchema} from '../controller/registerClient/registerClientSchema';
import {loginClientSchema} from '../controller/loginClient/loginClientSchema';

import {validateBody} from '../middleware/validateBody';
import {validateTokenController} from '../controller/validateToken/validateTokenController';
import {validateTokenSchema} from '../controller/validateToken/validateTokenSchema';

const router = Router();

router.post('/login', validateBody(loginClientSchema), loginClientController);
router.post('/register', validateBody(registerClientSchema), registerClientController);
router.post('/token', validateBody(validateTokenSchema), validateTokenController);

export {
	router,
};
