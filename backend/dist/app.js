"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const configs_1 = __importDefault(require("./configs/configs"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.json({
        msg: 'welcome'
    });
});
// database connection
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield mongoose_1.default.connect(configs_1.default.MONGO_URL, { useNewUrlParser: true });
            return console.log(`Successfully connected to ${configs_1.default.MONGO_URL}`);
        }
        catch (error) {
            console.log("Error connecting to database: ", error);
            return process.exit(1);
        }
    });
})();
app.listen(configs_1.default.ENV_PORT, () => {
    console.log("App is running on PORT 4000");
});
