import * as z from "zod";

const createTaskActionInputSchema = z.object({
  name: z
    .string()
    .min(1, "Task name is required.")
    .max(100, "Task name is too long."),
});

const completeTaskActionInputSchema = z.object({
  taskId: z.uuid({ version: "v4" }),
});

export { createTaskActionInputSchema, completeTaskActionInputSchema };
