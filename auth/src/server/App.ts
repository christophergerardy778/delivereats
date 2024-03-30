import 'reflect-metadata';
import './configureEnv';

import express from 'express';
import {router} from './router/router';
import {container} from '../container';
import {type Connection} from '../core/client/infrastructure/persistence/Connection';
import {types} from '../core/client/infrastructure/Types';

class App {
	private readonly expressApp = express();

	constructor() {
		this.expressApp.use(express.json());

		this.expressApp.use(express.urlencoded({
			extended: false,
		}));
	}

	public async run() {
		await this.setupServer();
		this.expressApp.listen(process.env.PORT);
	}

	private async setupServer() {
		this.setupRoutes();
		await this.setupDatabase();
	}

	private setupRoutes() {
		this.expressApp.use('/api', router);
	}

	private async setupDatabase() {
		const connection = container.get<Connection>(types.connection);
		await connection.connect();
	}
}

const app = new App();

app.run()
	.catch(console.error);
