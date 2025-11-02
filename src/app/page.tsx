"use client";

import { startTransition, useActionState } from "react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/utils/mode-toggle";
import { sendTestEmail } from "@/domains/email/actions/test-send";

export default function Home() {
  const [state, action, isPending] = useActionState(
    async (_prevState) => {
      const result = await sendTestEmail();
      return result;
    },
    { success: false, message: "" }
  );

  const handleClick = () => {
    startTransition(() => {
      action();
    });
  };

  return (
    <main className="flex h-full flex-col items-center justify-center gap-y-4">
      <ModeToggle className="fixed top-4 right-4 z-50" />
      <h1 className="text-4xl font-bold">Supa Next</h1>
      <p className="text-lg">A Next.js app template with a Supabase backend</p>
      <Button onClick={handleClick} disabled={isPending}>
        {isPending ? "Sending..." : "Send test email"}
      </Button>
      {state.message && (
        <p className={state.success ? "text-green-500" : "text-red-500"}>
          {state.message}
        </p>
      )}
    </main>
  );
}
