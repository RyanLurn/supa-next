import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db/connect";
import { serverEnvVars } from "@/env/server";

const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    usePlural: true,
  }),
  secret: serverEnvVars.BETTER_AUTH_SECRET,
  baseURL: serverEnvVars.BETTER_AUTH_URL,
});

export { auth };
