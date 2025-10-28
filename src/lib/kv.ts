import { Redis } from "@upstash/redis";
import { serverEnvVars } from "@/env/server";

const kv = new Redis({
  url: serverEnvVars.UPSTASH_REDIS_REST_URL,
  token: serverEnvVars.UPSTASH_REDIS_REST_TOKEN,
});

export { kv };
