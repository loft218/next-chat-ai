"use client";

import WarningIcon from "@mui/icons-material/Warning";
import { Alert, Box, Button, Input, Typography } from "@mui/joy";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function VerifyEmail() {
  const params = useSearchParams();
  const email = params.get("email");

  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  type Schema = {
    token: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<Schema>();

  const onSubmit = async ({ token }: any) => {
    if (!token || !email) throw new Error("email and token are required");

    try {
      setIsLoading(true);

      const ret = await fetch(
        `/api/auth/callback/email?${new URLSearchParams({
          email: email,
          token: token,
        })}`
      );

      if (!ret.ok) {
        return setError("token", { message: "验证码错误" });
      }

      router.push("/");
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box
      sx={{
        py: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit(onSubmit)();
        }}
      >
        <h1>验证邮箱</h1>
        <p>我们已将验证码发送到您的{email}邮箱</p>
        <Input
          {...register("token", {
            required: "验证码不能为空",
          })}
          size="lg"
          placeholder="验证码"
          sx={{ "--Input-minHeight": "48px" }}
          slotProps={{
            input: {
              maxLength: 6,
            },
          }}
        />

        {errors.token && <p>{errors.token.message}</p>}

        <Button type="submit" loading={isLoading}>
          确认
        </Button>
      </form>
    </Box>
  );
}
