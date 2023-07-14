import { type Message } from "ai";

import { ChatMessage } from "./ChatMessage";

export interface ChatList {
  messages: Message[];
}

export function ChatList({ messages }: ChatList) {
  if (!messages.length) {
    return null;
  }

  return (
    <div className="mt-6">
      {messages.map((message, index) => (
        <div key={index}>
          <ChatMessage
            message={message}
          />
        </div>
      ))}
    </div>
  );
}
