"use client";

import { User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { authClient } from "@/domains/identity/lib/auth-client";

type UserAvatarProps = {
  image: typeof authClient.$Infer.Session.user.image;
} & React.ComponentProps<typeof Avatar>;

function UserAvatar({ image, ...props }: UserAvatarProps) {
  return (
    <Avatar {...props}>
      <AvatarImage src={image ?? undefined} />
      <AvatarFallback>
        <User />
      </AvatarFallback>
    </Avatar>
  );
}

export { UserAvatar };
