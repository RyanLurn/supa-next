import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { AccountPortalLayout } from "@/domains/identity/account/components/portal/layout";
import { auth } from "@/domains/identity/lib/auth";

export default async function ProtectedPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    redirect("/sign-in");
  }

  return <AccountPortalLayout view="page" />;
}
