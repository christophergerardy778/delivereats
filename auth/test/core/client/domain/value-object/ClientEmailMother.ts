import {ClientEmail} from "../../../../../src/core/client/domain/value-object/ClientEmail";
import {faker} from "@faker-js/faker";

export class ClientEmailMother {
	public static random() {
		return new ClientEmail(faker.internet.email());
	}
}