import {ClientImg} from "../../../../../src/core/client/domain/value-object/ClientImg";
import {faker} from "@faker-js/faker";

export class ClientImgMother {
	public static random() {
		return new ClientImg(faker.image.avatar());
	}
}