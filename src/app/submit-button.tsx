"use client";

import { Button } from "@/app/example/button";
import { ComponentProps } from "react";
import { useFormStatus } from "react-dom";

export function SubmitButton(props: ComponentProps<"button">) {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      className="mt-2 rounded-3xl self-start"
      disabled={pending}
    >
      {props.children}
    </Button>
  );
}
