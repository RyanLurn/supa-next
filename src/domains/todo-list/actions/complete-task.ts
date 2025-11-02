"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import * as z from "zod";
import { db } from "@/db/connect";
import { tasks } from "@/db/schema/todo-list";
import { getUser } from "@/domains/identity/helpers/get-user";
import { accessTask } from "@/domains/todo-list/helpers/access-task";
import { taskIdSchema } from "@/domains/todo-list/validators";

async function completeTask(
  _prevState: { errors: Array<{ message: string }> },
  payload: FormData
) {
  const authResult = await getUser();
  if (authResult.isErr()) {
    if (authResult.error.kind === "unauthenticated") {
      redirect("/sign-in");
    }
    return { errors: [{ message: authResult.error.message }] };
  }
  const user = authResult.value;

  const taskIdEntryValue = payload.get("id");
  const validationResult = taskIdSchema.safeParse(taskIdEntryValue);
  if (validationResult.error) {
    console.warn(z.prettifyError(validationResult.error));
    const errors = validationResult.error.issues.map((issue) => ({
      message: issue.message,
    }));
    return {
      errors,
    };
  }

  const taskAccessResult = await accessTask({
    taskId: validationResult.data,
    userId: user.id,
  });
  if (taskAccessResult.isErr()) {
    return { errors: [{ message: taskAccessResult.error.message }] };
  }
  const task = taskAccessResult.value;

  try {
    await db
      .update(tasks)
      .set({ completed: true })
      .where(eq(tasks.id, task.id));

    revalidatePath("/todo-list");

    return { errors: [] };
  } catch (error) {
    console.error(
      `Failed to mark task with id "${task.id}" as completed. Unexpected error occurred:`,
      error
    );
    return { errors: [{ message: "Failed to mark task as completed." }] };
  }
}

export { completeTask };
