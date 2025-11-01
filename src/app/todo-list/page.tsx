import { eq } from "drizzle-orm";
import { db } from "@/db/connect";
import { tasks } from "@/db/schema/todo-list";
import { UserButton } from "@/domains/identity/account/components/button/user-button";
import { getUser } from "@/domains/identity/helpers/get-user";
import { TaskItem } from "@/domains/todo-list/components/task-item";

export default async function TodoListPage() {
  const authResult = await getUser();
  if (authResult.isErr()) {
    throw new Error(authResult.error.message);
  }
  const user = authResult.value;

  try {
    const tasksList = await db
      .select()
      .from(tasks)
      .where(eq(tasks.userId, user.id));

    return (
      <div className="size-full flex flex-col items-center">
        <UserButton className="fixed top-4 right-4 z-50" />
        <h1 className="text-2xl font-bold mt-12">Your tasks</h1>
        <div className="flex flex-col gap-4">
          {tasksList.map((task) => (
            <TaskItem
              key={task.id}
              title={task.name}
              completed={task.completed}
            />
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Failed to get tasks. Unexpected error occurred:", error);
    throw new Error("Failed to get tasks.");
  }
}
