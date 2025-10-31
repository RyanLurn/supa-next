import type * as z from "zod";
import type { createTaskActionInputSchema } from "@/domains/todo-list/validators";

type CreateTaskActionInput = z.infer<typeof createTaskActionInputSchema>;

export type { CreateTaskActionInput };
