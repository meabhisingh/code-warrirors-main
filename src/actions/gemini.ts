"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

const generateText = async (prompt: string = "Generate a sample title") => {
  try {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({
      model: "gemini-pro",
    });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return text;
  } catch (error) {
    throw error;
  }
};

export { generateText };
