import Link from "next/link";

import Logo from "@/components/Logo";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-5 my-10">
      <Logo />
      <Link
        href="/sign-in"
        className="text-3xl font-mono font-bold underline hover:no-underline"
      >
        Sign In
      </Link>
      <Link
        href="/chat"
        className="text-3xl font-mono font-bold underline hover:no-underline"
      >
        Chat
      </Link>
    </div>
  );
}
