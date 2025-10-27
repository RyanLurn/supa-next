import { betterAuth } from "better-auth";
import { serverEnvVars } from "@/env/server";

const auth = betterAuth({
  secret: serverEnvVars.BETTER_AUTH_SECRET,
  baseURL: serverEnvVars.BETTER_AUTH_URL,
});

export { auth };
