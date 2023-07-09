"use client";

import { Button, Link } from "@mui/joy";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";


export default function SignButton() {
  const { data: session } = useSession();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(!!session);
  }, [session]);

  return (
    <>
      {session?.user?.email && `Welcome, ${session.user.email.split("@")[0]}`}
      {isLoggedIn ? (
        <Button
          onClick={() => signOut()}
          variant="outlined"
          sx={{ borderRadius: 100 }}
        >
          退出登录
        </Button>
      ) : (
        <Button
          onClick={() => signIn()}
          variant="outlined"
          sx={{ borderRadius: 100 }}
        >
          登录
        </Button>
      )}
    </>
  );
}
