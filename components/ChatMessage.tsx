import { Message } from "ai";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";

import { ChatMessageActions } from "./ChatMessageActions";
import { MemoizedReactMarkdown } from "./Markdown";

import { CodeBlock } from "@/components/CodeBlock";

export interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({
  message,
  ...props
}: ChatMessageProps) {
  const roleClass = {
    system: "bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300",
    user: "bg-gradient-to-r from-purple-400 to-yellow-400",
    assistant: "bg-gradient-to-r from-yellow-200 via-green-200 to-green-300",
    function: "bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300",
  };

  return (
    <div className="py-5 -mx-4 px-4 transition-colors md:hover:bg-slate-50">
      <div className="flex gap-3 rounded-lg opacity-75">
        <div
          className={`shrink-0 w-7 h-7 rounded-full opacity-60  ${
            roleClass[message.role]
          }`}
        ></div>
        <div className="prose break-words prose-p:leading-relaxed prose-pre:p-0 overflow-hidden">
          <MemoizedReactMarkdown
            remarkPlugins={[remarkGfm, remarkMath]}
            components={{
              p({ children }) {
                return <p className="mb-2 last:mb-0">{children}</p>;
              },
              code({ node, inline, className, children, ...props }) {
                if (children.length) {
                  if (children[0] == "▍") {
                    return (
                      <span className="mt-1 animate-pulse cursor-default">
                        ▍
                      </span>
                    );
                  }

                  children[0] = (children[0] as string).replace("`▍`", "▍");
                }

                const match = /language-(\w+)/.exec(className || "");

                if (inline) {
                  return (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                }

                return (
                  <CodeBlock
                    key={Math.random()}
                    language={(match && match[1]) || ""}
                    value={String(children).replace(/\n$/, "")}
                    {...props}
                  />
                );
              },
            }}
          >
            {message.content}
          </MemoizedReactMarkdown>
          <ChatMessageActions message={message} />
        </div>
      </div>
    </div>
  );
}
