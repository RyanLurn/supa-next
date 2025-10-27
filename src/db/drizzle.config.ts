import { defineConfig } from "drizzle-kit";
import { serverEnvVars } from "@/env/server";

export default defineConfig({
  dbCredentials: {
    url: serverEnvVars.DATABASE_SESSION_POOLER_CONNECTION_STRING,
  },
  out: "./src/db/migrations",
  schema: "./src/db/schema",
  dialect: "postgresql",
});
