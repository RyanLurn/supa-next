// Mock page to test authentication

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/domains/identity/lib/auth";

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
