"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.Dog = void 0;
module.exports.User = require("./user.model");
module.exports.Dog = require("./dog.model");
const user_model_1 = require("./user.model");
Object.defineProperty(exports, "User", { enumerable: true, get: function () { return user_model_1.User; } });
const dog_model_1 = require("./dog.model");
Object.defineProperty(exports, "Dog", { enumerable: true, get: function () { return dog_model_1.Dog; } });
