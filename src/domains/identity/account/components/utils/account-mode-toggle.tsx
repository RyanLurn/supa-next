"use client";

import { ChevronDown, Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Spinner } from "@/components/ui/spinner";

function AccountModeToggle({ className }: { className?: string }) {
  const { setTheme, theme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          disabled={theme === undefined}
          className={className}
          variant="outline"
        >
          {theme === undefined && (
            <>
              <Spinner />
              Loading...
            </>
          )}
          {theme === "system" && (
            <>
              <Monitor />
              System
            </>
          )}
          {theme === "dark" && (
            <>
              <Moon />
              Dark
            </>
          )}
          {theme === "light" && (
            <>
              <Sun />
              Light
            </>
          )}
          <span className="sr-only">Toggle theme</span>
          <ChevronDown className="ml-auto" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <Sun />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <Moon />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          <Monitor />
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export { AccountModeToggle };
