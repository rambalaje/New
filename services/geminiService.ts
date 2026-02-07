
import { GoogleGenAI } from "@google/genai";
import { Message } from "../types";
import { EVENTS, SYMPOSIUM_NAME, SCHEDULE } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are Ram, the official assistant for ${SYMPOSIUM_NAME}.
${SYMPOSIUM_NAME} hosts two distinct symposiums: 
1. Fractals - (7 events).
2. Ivenor - (8 events).

Your goal is to help participants with information about both.

Symposium Data:
Events: ${JSON.stringify(EVENTS)}
Schedule: ${JSON.stringify(SCHEDULE)}

Rules:
1. Clarify which symposium (Fractals or Ivenor) an event belongs to when asked.
2. Be polite and professional.
3. If they ask about registration, explain that there are separate registrations for Fractals and Ivenor.
4. Keep answers concise.
5. If you don't know something, suggest they contact the coordinators at the registration desk.
`;

export async function getAIResponse(chatHistory: Message[]): Promise<string> {
  try {
    const lastMessage = chatHistory[chatHistory.length - 1];
    
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: lastMessage.text,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am currently experiencing some technical difficulties. Please try again in a moment.";
  }
}
