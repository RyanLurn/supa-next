import { createAuthClient } from "better-auth/react";
import { clientEnvVars } from "@/env/client";

const authClient = createAuthClient({
  baseURL: clientEnvVars.NEXT_PUBLIC_BETTER_AUTH_URL,
});

export { authClient };
