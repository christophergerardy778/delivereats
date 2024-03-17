import {ClientPassword} from "../../../../../src/core/client/domain/value-object/ClientPassword";
import {faker} from "@faker-js/faker";

export class ClientPasswordMother {
	public static random() {
		return new ClientPassword(faker.internet.password());
	}
}