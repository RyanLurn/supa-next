"use server";

import { revalidatePath } from "next/cache";
import { db } from "@/db/connect";
import { tasks } from "@/db/schema/todo-list";
import { getUser } from "@/domains/identity/helpers/get-user";
import { createTaskActionInputSchema } from "@/domains/todo-list/validators";

async function createTask(
  _prevState: { success: boolean; message: string },
  payload: FormData
) {
  const authResult = await getUser();
  if (authResult.isErr()) {
    return { success: false, message: authResult.error.message };
  }
  const user = authResult.value;

  const nameEntryValue = payload.get("name");
  const validationResult = createTaskActionInputSchema.safeParse({
    name: nameEntryValue,
  });
  if (validationResult.error) {
    return {
      success: false,
      message: "Invalid input",
      errors: validationResult.error.issues,
    };
  }

  try {
    await db
      .insert(tasks)
      .values({ name: validationResult.data.name, userId: user.id });

    revalidatePath("/todo-list");

    return { success: true, message: "Task created successfully." };
  } catch (error) {
    console.error("Failed to create task. Unexpected error occurred:", error);
    return { success: false, message: "Failed to create task." };
  }
}

export { createTask };
