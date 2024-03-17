import {ClientName} from "../../../../../src/core/client/domain/value-object/ClientName";
import {faker} from "@faker-js/faker";

export class ClientNameMother {
	public static random(): ClientName {
		return new ClientName(faker.person.firstName());
	}
}