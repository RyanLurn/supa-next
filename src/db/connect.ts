import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as identitySchema from "@/db/schema/identity";
import * as todoListSchema from "@/db/schema/todo-list";
import { serverEnvVars } from "@/env/server";

const client = postgres(
  serverEnvVars.DATABASE_TRANSACTION_POOLER_CONNECTION_STRING,
  { prepare: false }
);

const db = drizzle({
  client,
  schema: { ...identitySchema, ...todoListSchema },
});

export { db };
