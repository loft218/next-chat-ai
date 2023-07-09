import Logo from "./Logo";
import ThemeSwitcher from "./ThemeSwitcher";

import { OPENAI_API_MODEL } from "@/lib/utils/openAI";

export default function ChatHeader() {
  return (
    <header>
      <div className="flex justify-between items-center">
        <Logo />
        <ThemeSwitcher />
      </div>
      <div className="flex items-center mt-2">
        <span className="text-2xl font-extrabold mr-1">ChatGPT</span>
        <span className="gpt-subtitle">Mini</span>
      </div>
      <p className="mt-1 opacity-60">
        Based on OpenAI API ({OPENAI_API_MODEL}).
      </p>
    </header>
  );
}
