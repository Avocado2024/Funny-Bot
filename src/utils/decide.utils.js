import { OpenRouter } from "@openrouter/sdk";
import { OPENROUTER_API_KEY, DLM_NAME } from "../config/env.config.js";
import { QUESTIONS } from "../config/questions.config.js";

export async function decide(state) {
  const openrouter = new OpenRouter({ apiKey: OPENROUTER_API_KEY });
  const decision = await openrouter.alpha.decisions.create({
    decisionsRequest: { model: DLM_NAME, state, questions: QUESTIONS },
  });

  return decision;
}
