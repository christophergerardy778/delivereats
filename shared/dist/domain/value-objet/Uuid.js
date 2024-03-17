"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Uuid = void 0;
const ValueObject_1 = require("./ValueObject");
const uuid_validate_1 = __importDefault(require("uuid-validate"));
const uuid_1 = require("uuid");
const InvalidParamError_1 = require("../error/InvalidParamError");
class Uuid extends ValueObject_1.ValueObject {
    static random() {
        return new Uuid((0, uuid_1.v4)());
    }
    constructor(value) {
        super(value);
        this.ensureIsValidUuid(value);
    }
    ensureIsValidUuid(id) {
        if (!(0, uuid_validate_1.default)(id)) {
            throw new InvalidParamError_1.InvalidParamError(`<${this.constructor.name}>: Invalid value: ${id}`);
        }
    }
}
exports.Uuid = Uuid;
