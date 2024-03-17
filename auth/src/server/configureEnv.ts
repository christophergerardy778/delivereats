import dotenv from 'dotenv';
import path from 'node:path';

const envPath = path.resolve(__dirname, '../../.env');

dotenv.config({
	path: envPath,
});
