"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueObject = void 0;
class ValueObject {
    value;
    constructor(value) {
        this.value = value;
        this.ensureIsDefined(value);
    }
    ensureIsDefined(value) {
        if (value === null || value === undefined) {
        }
    }
    toString() {
        return this.value.toString();
    }
}
exports.ValueObject = ValueObject;
