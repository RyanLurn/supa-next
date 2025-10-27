import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import { db } from "@/db/connect";
import { serverEnvVars } from "@/env/server";

const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    usePlural: true,
  }),
  secret: serverEnvVars.BETTER_AUTH_SECRET,
  baseURL: serverEnvVars.BETTER_AUTH_URL,
  plugins: [nextCookies()], // Make sure that nextCookies is the last plugin in the array
});

export { auth };
