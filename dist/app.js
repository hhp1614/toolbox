"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const koa_static_1 = __importDefault(require("koa-static"));
const path_1 = __importDefault(require("path"));
const app = new koa_1.default();
app.use(koa_static_1.default(path_1.default.resolve(__dirname, '../client/build')));
const port = 9000;
app.listen(port);
console.log(`server running on port ${port}`);
