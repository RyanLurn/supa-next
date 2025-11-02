import { err, ok, type Result } from "neverthrow";
import { getTask } from "@/domains/todo-list/queries/get-task";
import type { SelectTask } from "@/domains/todo-list/types";
import type {
  EmptySelectError,
  UnauthorizedError,
  UnexpectedError,
} from "@/types";

async function accessTask({
  taskId,
  userId,
}: {
  taskId: string;
  userId: string;
}): Promise<
  Result<SelectTask, UnauthorizedError | EmptySelectError | UnexpectedError>
> {
  const getTaskResult = await getTask(taskId);
  if (getTaskResult.isErr()) {
    return err(getTaskResult.error);
  }
  const task = getTaskResult.value;

  if (task.userId !== userId) {
    console.warn(
      `User with id "${userId}" is not authorized to access task with id "${taskId}".`
    );
    return err({ kind: "unauthorized", message: "Unauthorized." });
  }

  return ok(task);
}

export { accessTask };
