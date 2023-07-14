import { Message } from "ai";
import { useChat } from "ai/react";

import ChatHeader from "./ChatHeader";
import { ChatList } from "./ChatList";
import { ChatPanel } from "./ChatPanel";

export interface ChatProps {
  id?: string;
}

export default function Chat({ id }: ChatProps) {
  const { messages, append, reload, stop, isLoading, input, setInput } =
    useChat({
      id,
      body: {
        id,
      },
      onResponse(response) {
        if (response.status === 401) {
          //   toast.error(response.statusText);
        }
      },
    });

  const testMessages = [
    // { id: "1", content: "Hi", role: "user" },
    // { id: "2", content: "Hi", role: "assistant" },
    // { id: "3", content: "你好", role: "user" },
    // { id: "4", content: "你好，有什么能帮助你的吗？", role: "assistant" },
    ...messages,
  ] as Message[];

  return (
    <>
      <ChatHeader />
      <ChatPanel
        id={id}
        isLoading={isLoading}
        stop={stop}
        append={append}
        reload={reload}
        messages={testMessages}
        input={input}
        setInput={setInput}
      />
    </>
  );
}
