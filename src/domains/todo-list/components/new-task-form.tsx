"use client";

import { Plus } from "lucide-react";
import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createTask } from "@/domains/todo-list/actions/create-task";
import { cn } from "@/lib/utils";

function NewTaskForm({ className }: { className?: string }) {
  const [_state, action, isPending] = useActionState(createTask, {
    success: false,
    message: "",
  });

  return (
    <form
      action={action}
      className={cn("flex gap-2 items-center w-full", className)}
    >
      <Input className="flex-1" name="name" />
      <Button type="submit" size="icon" disabled={isPending}>
        <Plus />
      </Button>
    </form>
  );
}

export { NewTaskForm };
