import { CompletedTaskItem } from "@/domains/todo-list/components/completed-task-item";
import { TaskItem } from "@/domains/todo-list/components/task-item";
import type { SelectTask } from "@/domains/todo-list/types";

function TaskList({
  tasks,
  completedTasks,
}: {
  tasks: SelectTask[];
  completedTasks: SelectTask[];
}) {
  return (
    <div className="flex flex-col gap-y-4 w-full">
      {tasks.map((task) => (
        <TaskItem key={task.id} id={task.id} title={task.name} />
      ))}
      {completedTasks.map((task) => (
        <CompletedTaskItem key={task.id} id={task.id} title={task.name} />
      ))}
    </div>
  );
}

export { TaskList };
