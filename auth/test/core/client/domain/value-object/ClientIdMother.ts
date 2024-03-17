import {ClientId} from "../../../../../src/core/client/domain/value-object/ClientId";

export class ClientIdMother {
	public static random() {
		return ClientId.random();
	}
}