"use client";

import { Settings } from "lucide-react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SignOutOption } from "@/domains/identity/account/components/button/sign-out";
import { AccountPanel } from "@/domains/identity/account/components/panel/account-panel";
import { UserAvatar } from "@/domains/identity/account/components/ui/user-avatar";
import { authClient } from "@/domains/identity/lib/auth-client";

function UserButton({ className }: { className?: string }) {
  const { data } = authClient.useSession();

  if (data === null) return null;

  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger className={className}>
          <UserAvatar className="size-9" image={data.user.image} />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>{data.user.name}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DialogTrigger asChild>
            <DropdownMenuItem>
              <Settings />
              Manage account
            </DropdownMenuItem>
          </DialogTrigger>
          <SignOutOption />
        </DropdownMenuContent>
      </DropdownMenu>
      <AccountPanel />
    </Dialog>
  );
}

export { UserButton };
