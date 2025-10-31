"use client";

import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

function TaskItem({ title, completed }: { title: string; completed: boolean }) {
  return (
    <div className="flex items-center justify-between gap-x-2 rounded-md border border-border pl-4 pr-2 py-2">
      <Checkbox defaultChecked={completed} />
      <p className={cn("flex-1", completed && "line-through")}>{title}</p>
      <Button variant="ghost" size="icon">
        <X />
      </Button>
    </div>
  );
}

export { TaskItem };
