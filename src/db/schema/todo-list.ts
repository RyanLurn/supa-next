import { sql } from "drizzle-orm";
import { boolean, pgTable, text, uuid } from "drizzle-orm/pg-core";
import { timestamps } from "@/db/helpers/timestamps";
import { userId } from "@/db/helpers/user-id";

const tasks = pgTable("tasks", {
  id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  completed: boolean("completed").default(false).notNull(),
  userId,
  ...timestamps,
});

export { tasks };
