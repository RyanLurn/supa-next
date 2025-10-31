import { text } from "drizzle-orm/pg-core";
import { users } from "@/db/schema/identity";

const userId = text("user_id")
  .notNull()
  .references(() => users.id, { onDelete: "cascade" });

export { userId };
