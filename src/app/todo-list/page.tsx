import { UserButton } from "@/domains/identity/account/components/button/user-button";
import { getUser } from "@/domains/identity/helpers/get-user";
import { NewTaskForm } from "@/domains/todo-list/components/new-task-form";
import { TaskList } from "@/domains/todo-list/components/task-list";
import { listTasks } from "@/domains/todo-list/queries/list-tasks";

export default async function TodoListPage() {
  const authResult = await getUser();
  if (authResult.isErr()) {
    throw new Error(authResult.error.message);
  }
  const user = authResult.value;

  const tasksListResult = await listTasks(user.id);
  if (tasksListResult.isErr()) {
    throw new Error(tasksListResult.error.message);
  }
  const tasksList = tasksListResult.value;

  return (
    <div className="size-full flex flex-col items-center max-w-md mx-auto gap-y-4">
      <UserButton className="fixed top-4 right-4 z-50" />
      <h1 className="text-2xl font-bold mt-12">Your tasks</h1>
      <NewTaskForm />
      <TaskList tasks={tasksList} />
    </div>
  );
}
