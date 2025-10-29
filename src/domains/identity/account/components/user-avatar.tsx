"use client";

import { User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

function UserAvatar({
  className,
  src,
}: {
  src?: undefined | string;
  className?: string;
}) {
  return (
    <Avatar className={cn("size-10", className)}>
      <AvatarImage src={src} />
      <AvatarFallback>
        <User />
      </AvatarFallback>
    </Avatar>
  );
}

export { UserAvatar };
