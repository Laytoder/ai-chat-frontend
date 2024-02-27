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
exports.interactHandler = exports.startInteract = void 0;
const uuid_1 = require("uuid");
const axios_1 = __importDefault(require("axios"));
const apiKey = process.env.VOICEFLOW_API_KEY;
const baseURL = "https://general-runtime.voiceflow.com";
function startInteract(userID, userInput) {
    return __awaiter(this, void 0, void 0, function* () {
        const body = {
            action: {
                type: "text",
                payload: userInput,
            },
        };
        const response = yield (0, axios_1.default)({
            method: "POST",
            baseURL: baseURL,
            url: `/state/user/${userID}/interact`,
            headers: {
                Authorization: apiKey,
            },
            data: body,
        });
        return response.data;
    });
}
exports.startInteract = startInteract;
function interactHandler(req, res) {
    const userID = req.body.userId || (0, uuid_1.v4)();
    const userInput = req.body.userInput;
    startInteract(userID, userInput)
        .then((result) => {
        res.status(200).json({ userID: userID, data: result });
    })
        .catch((error) => {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    });
}
exports.interactHandler = interactHandler;
