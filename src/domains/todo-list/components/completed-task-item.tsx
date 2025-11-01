"use client";

import { Trash2 } from "lucide-react";
import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { FieldError } from "@/components/ui/field";
import { Spinner } from "@/components/ui/spinner";
import { deleteTask } from "@/domains/todo-list/actions/delete-task";

function CompletedTaskItem({ id, title }: { id: string; title: string }) {
  const [state, action, isPending] = useActionState(deleteTask, {
    errors: [],
  });
  return (
    <form
      action={action}
      className="flex w-full items-center justify-between gap-x-2 rounded-md border border-border pl-3 pr-1 py-1"
    >
      <input type="hidden" name="id" value={id} />
      <div className="flex flex-col flex-1 gap-y-2">
        <p className="text-muted-foreground line-through">{title}</p>
        {state.errors.length > 0 && <FieldError errors={state.errors} />}
      </div>
      <Button type="submit" variant="ghost" size="icon" disabled={isPending}>
        {isPending ? (
          <Spinner className="text-destructive" />
        ) : (
          <Trash2 className="text-destructive" />
        )}
      </Button>
    </form>
  );
}

export { CompletedTaskItem };
