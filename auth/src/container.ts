import {Container} from 'inversify';
import {RegisterClientCommandHandler} from './core/client/app/RegisterClientCommandHandler';
import {clientTypes} from './core/client/infrastructure/ClientTypes';
import {types} from './core/client/infrastructure/Types';
import {Jwt} from './core/client/domain/Jwt';

const container = new Container();

container.bind<Jwt>(types.jwt).to(Jwt);
container.bind<RegisterClientCommandHandler>(clientTypes.registerClientCommandHandler).to(RegisterClientCommandHandler);

export {
	container,
};
