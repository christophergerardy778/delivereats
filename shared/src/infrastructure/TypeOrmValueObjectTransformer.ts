import {type Primitives, ValueObject} from '../domain/value-objet/ValueObject';

// eslint-disable-next-line @typescript-eslint/ban-types
type NewableClass<T> = (new (...args: any[]) => T) & Function;

export function typeOrmValueObjectTransformer<T extends Primitives>(valueObject: NewableClass<ValueObject<T>>) {
	return {
		to: (valueObject: ValueObject<T>) => valueObject.value,
		from: (value: T): ValueObject<T> => new ValueObject<T>(value),
	};
}
