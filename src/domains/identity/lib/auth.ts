import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import { db } from "@/db/connect";
import { serverEnvVars } from "@/env/server";
import { kv } from "@/lib/kv";

const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    usePlural: true,
  }),
  secret: serverEnvVars.BETTER_AUTH_SECRET,
  baseURL: serverEnvVars.BETTER_AUTH_URL,
  plugins: [nextCookies()], // Make sure that nextCookies is the last plugin in the array
  secondaryStorage: {
    get: async (key) => {
      const value = await kv.get(key);
      return value;
    },
    set: async (key, value, ttl) => {
      if (ttl) await kv.set(key, value, { ex: ttl });
      else await kv.set(key, value);
    },
    delete: async (key) => {
      await kv.del(key);
    },
  },
});

export { auth };
