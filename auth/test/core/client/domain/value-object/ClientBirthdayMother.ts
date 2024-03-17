import {ClientBirthday} from "../../../../../src/core/client/domain/value-object/ClientBirthday";
import {faker} from "@faker-js/faker";
// @ts-ignore
import dayjs from "dayjs";

export class ClientBirthdayMother {
	public static random() {
		const birthdate = faker.date.birthdate({
			mode: 'age',
			min: 18,
			refDate: 'string'
		});

		return new ClientBirthday(dayjs(birthdate).format('YYYY-MM-DD'));
	}
}