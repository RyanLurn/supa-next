import { createEnv } from "@t3-oss/env-nextjs";
import * as z from "zod";

const serverEnvVars = createEnv({
  server: {
    DATABASE_TRANSACTION_POOLER_CONNECTION_STRING: z.string().min(1),
    DATABASE_SESSION_POOLER_CONNECTION_STRING: z.string().min(1),
    BETTER_AUTH_SECRET: z.string().min(1),
    BETTER_AUTH_URL: z.url(),
    RESEND_API_KEY: z.string().min(1),
    UPSTASH_REDIS_REST_URL: z.url(),
    UPSTASH_REDIS_REST_TOKEN: z.string().min(1),
    GOOGLE_CLIENT_ID: z.string().min(1),
    GOOGLE_CLIENT_SECRET: z.string().min(1),
  },
  experimental__runtimeEnv: process.env,
  emptyStringAsUndefined: true,
});

export { serverEnvVars };
