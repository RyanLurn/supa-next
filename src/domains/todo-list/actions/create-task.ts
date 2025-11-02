"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import * as z from "zod";
import { db } from "@/db/connect";
import { tasks } from "@/db/schema/todo-list";
import { getUser } from "@/domains/identity/helpers/get-user";
import { createTaskActionInputSchema } from "@/domains/todo-list/validators";

async function createTask(
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

  const nameEntryValue = payload.get("name");
  const validationResult = createTaskActionInputSchema.safeParse({
    name: nameEntryValue,
  });
  if (validationResult.error) {
    console.warn(z.prettifyError(validationResult.error));
    const errors = validationResult.error.issues.map((issue) => ({
      message: issue.message,
    }));
    return {
      errors,
    };
  }

  try {
    await db
      .insert(tasks)
      .values({ name: validationResult.data.name, userId: user.id });

    revalidatePath("/todo-list");

    return { errors: [] };
  } catch (error) {
    console.error("Failed to create task. Unexpected error occurred:", error);
    return { errors: [{ message: "Failed to create task." }] };
  }
}

export { createTask };
