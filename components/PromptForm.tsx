"use client";

import { UseChatHelpers } from "ai/react";
import React, { useRef } from "react";

import IconSend from "@/components/icons/Send";
import { useEnterSubmit } from "@/lib/hooks/useEnterSubmit";

export interface PromptProps
  extends Pick<UseChatHelpers, "input" | "setInput"> {
  onSubmit: (value: string) => Promise<void>;
  isLoading: boolean;
  stop: () => void;
}

export default function PromptForm({
  onSubmit,
  input,
  setInput,
  isLoading,
  stop,
}: PromptProps) {
  const { formRef, onKeyDown } = useEnterSubmit();
  const inputRef = useRef<HTMLTextAreaElement | null>(null);

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        if (!input?.trim()) {
          return;
        }
        setInput("");
        await onSubmit(input);
      }}
      ref={formRef}
      className="my-6"
    >
      {isLoading ? (
        <div className="flex items-center justify-center h-12 my-4 gap-4 bg-slate-300 bg-opacity-20 rounded-sm">
          <span>AI 正在思考...</span>
          <div
            className="px-2 py-0.5 border border-slate-300 rounded-md text-sm cursor-pointer hover:bg-slate-300/10"
            onClick={stop}
          >
            停止
          </div>
        </div>
      ) : (
        <div className="flex justify-center gap-2">
          <textarea
            ref={inputRef}
            value={input}
            onKeyDown={onKeyDown}
            onChange={(e) => setInput(e.target.value)}
            spellCheck={false}
            placeholder="输入点什么..."
            rows={1}
            tabIndex={0}
            autoComplete="off"
            className="w-full p-3 rounded-sm bg-slate-300 bg-opacity-20 placeholder-opacity-50 resize-none scroll-p-2 focus:outline-none focus:bg-opacity-30"
          />
          <button
            className="h-12 px-4 py-2 bg-slate-300 bg-opacity-20 hover:bg-opacity-30 rounded-sm"
            disabled={isLoading}
          >
            <IconSend />
          </button>
        </div>
      )}
    </form>
  );
}
