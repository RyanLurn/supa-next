import type * as z from "zod";
import type { tasks } from "@/db/schema/todo-list";
import type { createTaskActionInputSchema } from "@/domains/todo-list/validators";

type CreateTaskActionInput = z.infer<typeof createTaskActionInputSchema>;

type SelectTask = typeof tasks.$inferSelect;

export type { CreateTaskActionInput, SelectTask };
