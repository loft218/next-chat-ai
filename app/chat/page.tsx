"use client";

import Chat from "@/components/Chat";
import { useTheme } from "@/lib/hooks/useTheme";
import { cuid } from "@/lib/utils/utils";

export default function ChatPage() {
  useTheme();

  const id = cuid();

  return <Chat id={id} />;
}
