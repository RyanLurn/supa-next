import { and, desc, eq } from "drizzle-orm";
import { err, ok, type Result } from "neverthrow";
import { db } from "@/db/connect";
import { tasks } from "@/db/schema/todo-list";
import type { SelectTask } from "@/domains/todo-list/types";
import type { UnexpectedError } from "@/types";

async function listCompletedTasks(
  userId: string
): Promise<Result<SelectTask[], UnexpectedError>> {
  try {
    const tasksList = await db
      .select()
      .from(tasks)
      .where(and(eq(tasks.userId, userId), eq(tasks.completed, true)))
      .orderBy(desc(tasks.updatedAt));

    return ok(tasksList);
  } catch (error) {
    console.error(
      "Failed to get completed tasks. Unexpected error occurred:",
      error
    );
    return err({
      kind: "unexpected",
      message: "Failed to get completed tasks.",
    });
  }
}

export { listCompletedTasks };
