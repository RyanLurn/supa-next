"use client";

import { startTransition, useActionState } from "react";
import { Button } from "@/components/ui/button";
import { sendTestEmail } from "@/domains/email/actions/test-send";

export default function Home() {
  const [state, action, isPending] = useActionState(
    async (_prevState) => {
      const result = await sendTestEmail();
      return result;
    },
    { success: false, message: "" } // ?
  );

  const handleClick = () => {
    startTransition(() => {
      action();
    });
  };

  return (
    <main className="flex h-screen flex-col items-center justify-center gap-y-4">
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
