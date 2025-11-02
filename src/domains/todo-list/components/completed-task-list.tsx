import { AlertCircleIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CompletedTaskItem } from "@/domains/todo-list/components/completed-task-item";
import { listCompletedTasks } from "@/domains/todo-list/queries/list-completed-tasks";

async function CompletedTaskList({ userId }: { userId: string }) {
  const listCompletedTasksResult = await listCompletedTasks(userId);

  if (listCompletedTasksResult.isErr()) {
    return (
      <Alert variant="destructive">
        <AlertCircleIcon />
        <AlertTitle>Something went wrong</AlertTitle>
        <AlertDescription>
          {listCompletedTasksResult.error.message}
        </AlertDescription>
      </Alert>
    );
  }

  const completedTasks = listCompletedTasksResult.value;

  return (
    <>
      {completedTasks.map((task) => (
        <CompletedTaskItem key={task.id} id={task.id} title={task.name} />
      ))}
    </>
  );
}

export { CompletedTaskList };
