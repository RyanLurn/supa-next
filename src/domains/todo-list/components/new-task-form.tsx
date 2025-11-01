"use client";

import { Plus } from "lucide-react";
import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Field, FieldError } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { createTask } from "@/domains/todo-list/actions/create-task";
import { cn } from "@/lib/utils";

function NewTaskForm({ className }: { className?: string }) {
  const [state, action, isPending] = useActionState(createTask, {
    success: false,
    message: "",
  });

  return (
    <form
      action={action}
      className={cn("flex gap-2 items-center w-full", className)}
    >
      <Field className="flex-1">
        <Input name="name" required />
        {state.errors && <FieldError errors={state.errors} />}
      </Field>
      <Button
        className="self-start"
        type="submit"
        size="icon"
        disabled={isPending}
      >
        <Plus />
      </Button>
    </form>
  );
}

export { NewTaskForm };
