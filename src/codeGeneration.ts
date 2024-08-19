import axios from 'axios';

export class CodeGenerator {
    static async generateCode(prompt: string): Promise<string> {
        try {
            const response = await axios.post('https://api.groq.com/v1/generate', {
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
        } catch (error) {
            console.error("Error generating code:", error);
            return "// Error occurred during code generation.";
        }
    }
}

