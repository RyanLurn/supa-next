import { headers } from "next/headers";
import { auth } from "@/domains/identity/lib/auth";
import "server-only";
import type { User } from "better-auth";
import { err, ok, type Result } from "neverthrow";
import type { UnauthenticatedError, UnexpectedError } from "@/types";

async function getUser(): Promise<
  Result<User, UnauthenticatedError | UnexpectedError>
> {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session) {
      console.warn("User is not authenticated.");
      return err({
        kind: "unauthenticated",
        message: "Not authenticated.",
      });
    }

    return ok(session.user);
  } catch (error) {
    console.error("Failed to get user id. Unexpected error occurred:", error);
    return err({ kind: "unexpected", message: "Failed to get user id." });
  }
}

export { getUser };
