import { createEnv } from "@t3-oss/env-nextjs";
import * as z from "zod";

const serverEnvVars = createEnv({
  server: {
    DATABASE_TRANSACTION_POOLER_CONNECTION_STRING: z.string().min(1),
    DATABASE_SESSION_POOLER_CONNECTION_STRING: z.string().min(1),
    BETTER_AUTH_SECRET: z.string().min(1),
    BETTER_AUTH_URL: z.url(),
  },
  experimental__runtimeEnv: process.env,
});

export { serverEnvVars };
