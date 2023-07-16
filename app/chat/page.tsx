"use client";

import Chat from "@/components/Chat";
import { cuid } from "@/lib/utils/utils";

export default function ChatPage() {
  const id = cuid();

  return <Chat id={id} />;
}
