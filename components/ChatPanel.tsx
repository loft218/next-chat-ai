import { type UseChatHelpers } from "ai/react";

import IconRefresh from "./icons/Refresh";
import { ChatList } from "./ChatList";
import PromptForm from "./PromptForm";

export interface ChatPanelProps
  extends Pick<
    UseChatHelpers,
    | "append"
    | "isLoading"
    | "reload"
    | "messages"
    | "stop"
    | "input"
    | "setInput"
  > {
  id?: string;
}

export function ChatPanel({
  id,
  isLoading,
  stop,
  append,
  reload,
  input,
  setInput,
  messages,
}: ChatPanelProps) {
  return (
    <div>
      <ChatList messages={messages} />

      {messages.length > 0 && !isLoading && (
        <div className="flex justify-center items-center mx-auto my-6">
          <div
            onClick={() => reload()}
            className="flex items-center gap-1 px-3 py-1 opacity-70 border border-slate-300 rounded-md text-sm cursor-pointer hover:bg-slate-300/10"
          >
            <IconRefresh />
            <span>重新回答</span>
          </div>
        </div>
      )}

      <PromptForm
        onSubmit={async (value) => {
          await append({
            id,
            content: value,
            role: "user",
          });
        }}
        input={input}
        setInput={setInput}
        isLoading={isLoading}
        stop={stop}
      />
    </div>
  );
}
