import { boolean, pgTable, text } from "drizzle-orm/pg-core";
import { timestamps } from "@/db/helpers/timestamps";
import { userId } from "@/db/helpers/user-id";

const tasks = pgTable("tasks", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  completed: boolean("completed").default(false).notNull(),
  userId,
  ...timestamps,
});

export { tasks };
