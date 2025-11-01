import { eq } from "drizzle-orm";
import { err, ok, type Result } from "neverthrow";
import { db } from "@/db/connect";
import { tasks } from "@/db/schema/todo-list";
import type { SelectTask } from "@/domains/todo-list/types";
import type { UnexpectedError } from "@/types";

async function listTasks(
  userId: string
): Promise<Result<SelectTask[], UnexpectedError>> {
  try {
    const tasksList = await db
      .select()
      .from(tasks)
      .where(eq(tasks.userId, userId));

    return ok(tasksList);
  } catch (error) {
    console.error("Failed to get tasks. Unexpected error occurred:", error);
    return err({ kind: "unexpected", message: "Failed to get tasks." });
  }
}

export { listTasks };
