import axios from 'axios';

export class CodeGenerator {
    static async generateCode(prompt: string): Promise<string> {
        try {
            const response = await axios.post('https://api.groq.com/v1/generate', {
                prompt: prompt,
                
            }, {
                headers: {
                    'Authorization': `Bearer GROQ_API_KEY`,
                    'Content-Type': 'application/json'
                }
            });

            const generatedCode = response.data.code;
            return generatedCode || "// No code generated, please try again.";
        } catch (error) {
            console.error("Error generating code:", error);
            return "// Error occurred during code generation.";
        }
    }
}

