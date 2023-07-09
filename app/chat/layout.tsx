"use client";

import { CssVarsProvider } from "@mui/joy";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CssVarsProvider modeStorageKey="xiaoque-theme">
      <main className="max-w-2xl my-0 mx-auto py-16 px-8">{children}</main>
    </CssVarsProvider>
  );
}
