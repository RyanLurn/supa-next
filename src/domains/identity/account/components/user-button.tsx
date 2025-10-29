"use client";

import { Settings } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SignOutOption } from "@/domains/identity/account/components/sign-out";
import { UserAvatar } from "@/domains/identity/account/components/user-avatar";
import { authClient } from "@/domains/identity/lib/auth-client";

function UserButton({ className }: { className?: string }) {
  const { data } = authClient.useSession();

  if (data === null) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={className}>
        <UserAvatar src={data.user.image ?? undefined} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{data.user.name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem disabled>
          <Settings />
          Manage account
        </DropdownMenuItem>
        <SignOutOption />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export { UserButton };
