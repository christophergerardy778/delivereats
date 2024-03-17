import {Client} from "../../../../src/core/client/domain/Client";
import {ClientIdMother} from "./value-object/ClientIdMother";
import {ClientNameMother} from "./value-object/ClientNameMother";
import {ClientLastnameMother} from "./value-object/ClientLastnameMother";
import {ClientEmailMother} from "./value-object/ClientEmailMother";
import {ClientPasswordMother} from "./value-object/ClientPasswordMother";
import {ClientImgMother} from "./value-object/ClientImgMother";
import {ClientBirthdayMother} from "./value-object/ClientBirthdayMother";

export class ClientMother {
	public static random() {
		return Client.create({
			id: ClientIdMother.random(),
			name: ClientNameMother.random(),
			lastname: ClientLastnameMother.random(),
			email: ClientEmailMother.random(),
			password: ClientPasswordMother.random(),
			img: ClientImgMother.random(),
			birthday: ClientBirthdayMother.random(),
		});
	}
}