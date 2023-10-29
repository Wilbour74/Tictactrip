"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const axios = require("axios");
const app = (0, express_1.default)();
const path = require('path');
const port = 7000;
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'app.html'));
});
app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});
//Compter le nombre de mots pour les soustraires
const countWords = (text) => {
    const words = text.split(/\s+/);
    const filteredWords = words.filter(word => word.trim() !== '');
    return filteredWords.length;
};
app.post('/console', (req, res) => {
    const { justify } = req.body;
    const wordCount = countWords(justify);
    console.log(`Nombre de mots : ${wordCount}`);
});
//# sourceMappingURL=app.js.map