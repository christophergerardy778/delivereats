import {Container} from 'inversify';
import {RegisterClientCommandHandler} from './core/client/app/RegisterClientCommandHandler';
import {clientTypes} from './core/client/infrastructure/ClientTypes';
import {types} from './core/client/infrastructure/Types';
import {Jwt} from './core/client/domain/Jwt';
import {type AllClientRepository} from './core/client/domain/AllClientRepository';
import {TypeOrmClientRepository} from './core/client/infrastructure/persistence/TypeOrmClientRepository';
import {Connection} from './core/client/infrastructure/persistence/Connection';
import {CreateClient} from './core/client/app/create/CreateClient';
import {SearchClientByEmail} from './core/client/app/search/SearchClientByEmail';
import {SearchClientEmailAlreadyInUse} from './core/client/app/search/SearchClientEmailAlreadyInUse';
import {LoginClientByCredentials} from './core/client/app/login/LoginClientByCredentials';
import {PasswordEncryptor} from './core/client/domain/PasswordEncryptor';
import {type EncryptPassword} from 'shared-layer';
import {LoginClientByCredentialsQueryHandler} from './core/client/app/LoginClientByCredentialsQueryHandler';

const container = new Container();

container.bind<Jwt>(clientTypes.jwt).to(Jwt);
container.bind<Connection>(types.connection).to(Connection).inSingletonScope();

container.bind<AllClientRepository>(clientTypes.allClientsRepository).to(TypeOrmClientRepository);
container.bind<EncryptPassword>(clientTypes.passwordEncryptor).to(PasswordEncryptor);

container.bind<CreateClient>(clientTypes.createClient).to(CreateClient);
container.bind<SearchClientByEmail>(clientTypes.searchClientByEmail).to(SearchClientByEmail);
container.bind<SearchClientEmailAlreadyInUse>(clientTypes.searchClientEmailAlreadyInUse).to(SearchClientEmailAlreadyInUse);
container.bind<LoginClientByCredentials>(clientTypes.loginClientByCredentials).to(LoginClientByCredentials);

container.bind<RegisterClientCommandHandler>(clientTypes.registerClientCommandHandler).to(RegisterClientCommandHandler);
container.bind<LoginClientByCredentialsQueryHandler>(clientTypes.loginClientQueryHandler).to(LoginClientByCredentialsQueryHandler);

export {
	container,
};
