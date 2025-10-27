// Mock page to test authentication

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/domains/identity/lib/auth";

/**
 * Render a protected page that redirects to the homepage when the user is not authenticated.
 *
 * If an authenticated user is present, displays a welcome message including the user's name.
 * If no authenticated user is present, issues a redirect to "/".
 *
 * @returns A React element that displays "Welcome {name}" for the authenticated user
 */
export default async function ProtectedPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    redirect("/");
  }

  return (
    <div>
      <h1>Welcome {session.user.name}</h1>
    </div>
  );
}