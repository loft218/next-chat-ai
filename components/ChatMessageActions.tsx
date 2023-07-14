"use client";

import { Button } from "@mui/joy";
import { type Message } from "ai";

import { IconCopy } from "./icons/Copy";
import IconCheck from "./icons/IconCheck";

import { useCopyToClipboard } from "@/lib/hooks/useCopyToClipboard";

interface ChatMessageActionsProps extends React.ComponentProps<"div"> {
  message: Message;
}

export function ChatMessageActions({
  message,
  className,
  ...props
}: ChatMessageActionsProps) {
  const { isCopied, copyToClipboard } = useCopyToClipboard({ timeout: 2000 });

  const onCopy = () => {
    if (isCopied) return;
    copyToClipboard(message.content);
  };

  return null;

  return (
    <div
      className={
        "flex items-center justify-end transition-opacity group-hover:opacity-100 md:absolute md:-right-10 md:-top-2 md:opacity-0"
      }
      {...props}
    >
      <Button variant="outlined" onClick={onCopy}>
        {isCopied ? <IconCheck /> : <IconCopy />}
        <span className="sr-only">Copy message</span>
      </Button>
    </div>
  );
}
