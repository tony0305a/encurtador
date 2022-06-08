"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.URLController = void 0;
const shortid_1 = __importDefault(require("shortid"));
const Constants_1 = require("../config/Constants");
class URLController {
    async shorten(req, res) {
        const { originalURL } = req.body;
        const hash = shortid_1.default.generate();
        const shortURL = `${Constants_1.configURL.API_URL}/${hash}`;
        res.json({ originalURL, hash, shortURL });
    }
    async redirect(req, res) {
        const { hash } = req.params;
        const url = {
            originalURL: "https://cloud.mongodb.com/v2/629ff0941131ef1ef94031c7#clusters",
            hash: "VRuS4uDJs",
            shortURL: "http://localhost:3000/VRuS4uDJs"
        };
        res.redirect(url.originalURL);
    }
}
exports.URLController = URLController;
