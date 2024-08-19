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
exports.CodeGenerator = void 0;
const axios_1 = __importDefault(require("axios"));
class CodeGenerator {
    static generateCode(prompt) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield axios_1.default.post('https://api.groq.com/v1/generate', {
                    prompt: prompt,
                    // You may need to add other required parameters depending on the API
                }, {
                    headers: {
                        'Authorization': `Bearer YOUR_GROQ_API_KEY`,
                        'Content-Type': 'application/json'
                    }
                });
                // Assuming the API returns the generated code in `response.data.code`
                const generatedCode = response.data.code;
                return generatedCode || "// No code generated, please try again.";
            }
            catch (error) {
                console.error("Error generating code:", error);
                return "// Error occurred during code generation.";
            }
        });
    }
}
exports.CodeGenerator = CodeGenerator;
