import {Container} from 'inversify';
import {RegisterClientCommandHandler} from './core/client/app/RegisterClientCommandHandler';
import {clientTypes} from './core/client/infrastructure/ClientTypes';
import {types} from './core/client/infrastructure/Types';
import {Jwt} from './core/client/domain/Jwt';
import {type AllClientRepository} from './core/client/domain/AllClientRepository';
import {TypeOrmClientRepository} from './core/client/infrastructure/persistence/TypeOrmClientRepository';
import {Connection} from './core/client/infrastructure/persistence/Connection';

const container = new Container();

container.bind<Connection>(types.connection).to(Connection).inSingletonScope();
container.bind<AllClientRepository>(clientTypes.allClientsRepository).to(TypeOrmClientRepository);

container.bind<Jwt>(types.jwt).to(Jwt);
container.bind<RegisterClientCommandHandler>(clientTypes.registerClientCommandHandler).to(RegisterClientCommandHandler);

export {
	container,
};
