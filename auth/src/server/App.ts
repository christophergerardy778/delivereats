import 'reflect-metadata';
import './configureEnv';

import express from 'express';
import {appDataSource} from './datasource';
import {router} from './router/router';

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
		await appDataSource.initialize();
	}
}

const app = new App();

app.run()
	.catch(console.error);
