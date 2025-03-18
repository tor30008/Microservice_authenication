"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_config_1 = require("./Config/db.config");
const app = (0, express_1.default)();
const port = 8000;
const HOST = '0.0.0.0';
app.get('/test', (req, res) => {
    console.log("/test");
    res.json("test");
});
app.listen(port, async () => {
    (0, db_config_1.checkDB)();
    console.log("Start Backend API");
});
