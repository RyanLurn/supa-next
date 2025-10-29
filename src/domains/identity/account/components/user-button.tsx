"use client";

import { UserAvatar } from "@/domains/identity/account/components/user-avatar";
import { authClient } from "@/domains/identity/lib/auth-client";

function UserButton({ className }: { className?: string }) {
  const { data } = authClient.useSession();

  if (data === null) return null;

  return (
    <UserAvatar src={data.user.image ?? undefined} className={className} />
  );
}

export { UserButton };
