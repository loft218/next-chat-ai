"use client";

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { Box, Button, Input, Typography } from "@mui/joy";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { FieldErrors, useForm, UseFormRegister } from "react-hook-form";

import Logo from "@/components/Logo";

type Schema = {
  email: string;
};

export default function SignIn() {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Schema>();

  const handleSubmitEmail = async (values: Schema) => {
    try {
      setIsLoading(true);
      const ret = await signIn("email", {
        email: values.email,
        redirect: false,
      });

      if (ret?.ok) {
        router.push(
          `/verify-email?${new URLSearchParams({ email: values.email })}`
        );
      }
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
      <Logo />
      <Typography>请使用电子邮箱登录</Typography>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit(handleSubmitEmail)();
        }}
      >
        <EmailInput errors={errors} register={register} />
        <Button type="submit" loading={isLoading}>
          登录
        </Button>
      </form>
    </Box>
  );
}

function EmailInput({
  errors,
  register,
}: {
  errors: FieldErrors<Schema>;
  register: UseFormRegister<Schema>;
}) {
  return (
    <>
      <Input
        {...register("email", {
          required: "邮箱地址不能为空",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "邮箱地址错误",
          },
        })}
        size="lg"
        startDecorator={<EmailOutlinedIcon />}
        placeholder="mail@example.com"
        sx={{ "--Input-minHeight": "48px" }}
      />
      {errors.email && <p>{errors.email.message}</p>}
    </>
  );
}
