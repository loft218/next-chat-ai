// documents: https://toggles.dev/docs/react

import "@theme-toggles/react/css/Expand.css";

import { Expand } from "@theme-toggles/react";

import { useTheme } from "@/lib/hooks/useTheme";

export function ThemeToggle({ ...props }) {
  const { themeMode, toggleTheme } = useTheme();

  return (
    <div className="flex items-center justify-center w-10 h-10 rounded-md transition-colors hover:bg-slate-300/10">
      <Expand
        className={`text-xl text-gray-400 ${props.className}`}
        onToggle={toggleTheme}
        toggled={themeMode === "dark"}
      />
    </div>
  );
}
