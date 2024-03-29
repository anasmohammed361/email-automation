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
const dotenv_1 = require("dotenv");
const nodemailer_1 = __importDefault(require("nodemailer"));
(0, dotenv_1.config)();
const SUBJECT = "Hello from Node.js";
const TEXT = "Hello from Node.jsxx";
const transporter = nodemailer_1.default.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // Use `true` for port 465, `false` for all other ports
    auth: {
        user: "siddarthgaurav93@gmail.com",
        pass: process.env.EMAIL_SMTP_PASSWORD,
    },
});
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const mail = yield transporter.sendMail({
                from: '"Gaurau Siddarth" <siddarthgaurav93@gmail.com>', //
                to: "anasmohammed361@gmail.com",
                subject: SUBJECT, // Subject line
                text: TEXT, // plain text body
            });
            console.log(mail);
        }
        catch (error) {
            console.log(error);
        }
    });
}
main();
