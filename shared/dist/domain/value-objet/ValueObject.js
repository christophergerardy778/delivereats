"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueObject = void 0;
const InvalidParamError_1 = require("../error/InvalidParamError");
class ValueObject {
    // eslint-disable-next-line @typescript-eslint/parameter-properties
    value;
    constructor(value) {
        this.value = value;
        this.ensureIsDefined(value);
    }
    equals(vo) {
        return vo.constructor.name === this.constructor.name && this.value === vo.value;
    }
    toString() {
        return this.value.toString();
    }
    ensureIsDefined(value) {
        if (value === null || value === undefined) {
            throw new InvalidParamError_1.InvalidParamError('Value must be defined');
        }
    }
}
exports.ValueObject = ValueObject;
