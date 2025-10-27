"use client";

import { Button } from "@/components/ui/button";
import { sendTestEmail } from "@/domains/email/actions/test-send";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-y-4">
      <h1 className="text-4xl font-bold">Supa Next</h1>
      <p className="text-lg">A Next.js app template with a Supabase backend</p>
      <Button onClick={sendTestEmail}>Send test email</Button>
    </main>
  );
}
