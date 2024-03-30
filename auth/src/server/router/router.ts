import {Router} from 'express';
import {registerClientController} from '../controller/registerClientController';
import {isValidJwt} from '../middleware/isValidJwt';

const router = Router();

router.post('/register', [isValidJwt], registerClientController);

export {
	router,
};
