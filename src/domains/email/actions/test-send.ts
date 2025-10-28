"use server";

import { sendEmail } from "@/domains/email/lib/send";
import { getTestEmail } from "@/domains/email/lib/test-email";
import { kv } from "@/lib/kv";

async function sendTestEmail() {
  const key = "test-email-lock";

  const isLocked = await kv.get(key);
  if (isLocked) {
    const ttl = await kv.ttl(key);
    return {
      success: false,
      message: `Please wait ${ttl}s before sending again.`,
    };
  }

  await kv.set(key, "locked", { ex: 30 });

  const testEmail = await getTestEmail();
  const sendEmailResult = await sendEmail(testEmail);

  if (sendEmailResult.isErr()) {
    return { success: false, message: "Failed to send test email." };
  }

  return { success: true, message: "Test email sent successfully!" };
}

export { sendTestEmail };
