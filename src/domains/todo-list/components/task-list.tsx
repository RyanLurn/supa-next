import { AlertCircleIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { TaskItem } from "@/domains/todo-list/components/task-item";
import { listTasks } from "@/domains/todo-list/queries/list-tasks";

async function TaskList({ userId }: { userId: string }) {
  const listTasksResult = await listTasks(userId);

  if (listTasksResult.isErr()) {
    return (
      <Alert variant="destructive">
        <AlertCircleIcon />
        <AlertTitle>Something went wrong</AlertTitle>
        <AlertDescription>{listTasksResult.error.message}</AlertDescription>
      </Alert>
    );
  }

  const tasks = listTasksResult.value;

  return (
    <>
      {tasks.map((task) => (
        <TaskItem key={task.id} id={task.id} title={task.name} />
      ))}
    </>
  );
}

export { TaskList };
