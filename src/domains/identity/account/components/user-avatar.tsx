"use client";

import type { ReactNode } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

function UserAvatar({
  className,
  children,
  src,
}: {
  src?: undefined | string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Avatar className={cn("size-10", className)}>
      <AvatarImage src={src} />
      <AvatarFallback>{children}</AvatarFallback>
    </Avatar>
  );
}

export { UserAvatar };
