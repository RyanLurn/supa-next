import { eq } from "drizzle-orm";
import type { Result } from "neverthrow";
import { err, ok } from "neverthrow";
import { db } from "@/db/connect";
import { tasks } from "@/db/schema/todo-list";
import type { SelectTask } from "@/domains/todo-list/types";
import type { EmptySelectError, UnexpectedError } from "@/types";

async function getTask(
  taskId: string
): Promise<Result<SelectTask, EmptySelectError | UnexpectedError>> {
  try {
    const selectResult = await db
      .select()
      .from(tasks)
      .where(eq(tasks.id, taskId));

    const task = selectResult[0];
    if (task) {
      return ok(task);
    }

    console.warn("Found no task with id:", taskId);
    return err({ kind: "empty-select", message: "Task not found." });
  } catch (error) {
    console.error("Failed to get task. Unexpected error occurred:", error);
    return err({ kind: "unexpected", message: "Failed to get task." });
  }
}

export { getTask };
