import Logo from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

import { OPENAI_API_MODEL } from "@/lib/utils/openAI";

export default function ChatHeader() {
  return (
    <header>
      <div className="flex justify-between items-center">
        <Logo />
        <ThemeToggle />
      </div>
      <div className="flex items-center mt-2">
        <span className="text-2xl font-extrabold mr-1">ChatGPT</span>
        <span className="text-2xl text-transparent font-extrabold bg-clip-text  bg-gradient-to-r from-sky-400 to-emerald-600">
          Mini
        </span>
      </div>
      <p className="mt-1 opacity-60">
        Based on OpenAI API ({OPENAI_API_MODEL}).
      </p>
    </header>
  );
}
