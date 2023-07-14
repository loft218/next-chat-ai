import { OpenAIStream, StreamingTextResponse } from "ai";
import { Configuration, OpenAIApi } from "openai-edge";

import { OPENAI_API_MODEL } from "@/lib/utils/openAI";

// Set the runtime to edge for best performance
export const runtime = "edge";

// Create an OpenAI API client (that's edge friendly!)
const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
  basePath: process.env.OPENAI_BASE_PATH,
});

const openai = new OpenAIApi(config);

export async function POST(req: Request) {
  const { messages } = await req.json();

  const res = await openai.createChatCompletion({
    model: OPENAI_API_MODEL,
    messages,
    temperature: 0.7,
    stream: true,
  });

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(res);
  // Respond with the stream
  return new StreamingTextResponse(stream);
}
