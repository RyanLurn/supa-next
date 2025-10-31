"use server";

import { err, ok, type Result } from "neverthrow";
import { db } from "@/db/connect";
import { tasks } from "@/db/schema/todo-list";
import { getUser } from "@/domains/identity/helpers/get-user";
import type { CreateTaskActionInput } from "@/domains/todo-list/types";
import { createTaskActionInputSchema } from "@/domains/todo-list/validators";
import type { UnexpectedError, ValidationError } from "@/types";

async function createTask(
  formData: FormData
): Promise<
  Result<void, UnexpectedError | ValidationError<CreateTaskActionInput>>
> {
  const authResult = await getUser();
  if (authResult.isErr()) {
    return err(authResult.error);
  }
  const user = authResult.value;

  const nameEntryValue = formData.get("name");
  const validationResult = createTaskActionInputSchema.safeParse({
    name: nameEntryValue,
  });
  if (validationResult.error) {
    return err({
      kind: "validation",
      error: validationResult.error,
    });
  }

  try {
    await db
      .insert(tasks)
      .values({ name: validationResult.data.name, userId: user.id });

    return ok(undefined);
  } catch (error) {
    console.error("Failed to create task. Unexpected error occurred:", error);
    return err({
      kind: "unexpected",
      message: "Failed to create task.",
    });
  }
}

export { createTask };
