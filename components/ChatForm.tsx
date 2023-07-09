"use client";

import { Input, Textarea } from "@mui/joy";
import { useCompletion } from "ai/react";

type TextAreaEvent = React.KeyboardEvent<HTMLInputElement>;

export default function ChatForm() {
  const { completion, input, handleInputChange, handleSubmit } =
    useCompletion();

  const handleKeyDown = (e: TextAreaEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      e.currentTarget.form && e.currentTarget.form.submit();
    }
  };

  return (
    <div>
      <div>{completion}</div>
      <form onSubmit={handleSubmit}>
        <Input
          value={input}
          placeholder="Describe your business..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
