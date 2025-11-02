"use client"; // Error boundaries must be Client Components (from Next.js docs)

import { AlertTriangle } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function TodoListError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <div className="mx-4 w-full max-w-md rounded-lg p-8 text-center shadow-lg bg-card">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30">
          <AlertTriangle className="h-10 w-10 text-red-600 dark:text-red-400" />
        </div>

        <h2 className="mt-6 text-2xl font-bold">Something Went Wrong</h2>

        <p className="mt-2 text-muted-foreground">
          We couldn't load your todo list due to an unexpected error. Please try
          again, or return to the home page if the issue persists.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Button onClick={() => reset()}>Try Again</Button>
          <Button variant="outline" asChild>
            <Link href="/">Go Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
