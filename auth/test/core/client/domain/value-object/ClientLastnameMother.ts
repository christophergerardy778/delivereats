import {ClientLastname} from "../../../../../src/core/client/domain/value-object/ClientLastname";
import {faker} from "@faker-js/faker";

export class ClientLastnameMother {
	public static random() {
		return new ClientLastname(faker.person.lastName());
	}
}