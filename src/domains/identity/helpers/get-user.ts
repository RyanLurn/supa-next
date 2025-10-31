import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/domains/identity/lib/auth";
import "server-only";
import type { User } from "better-auth";
import { err, ok, type Result } from "neverthrow";
import type { UnexpectedError } from "@/types";

async function getUser(): Promise<Result<User, UnexpectedError>> {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session) {
      console.warn("User is not authenticated. Redirecting to sign-in page.");
      redirect("/sign-in");
    }

    return ok(session.user);
  } catch (error) {
    console.error("Failed to get user id. Unexpected error occurred:", error);
    return err({ kind: "unexpected", message: "Failed to get user id." });
  }
}

export { getUser };
