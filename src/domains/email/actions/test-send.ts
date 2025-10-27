"use server";

import { sendEmail } from "@/domains/email/lib/send";
import { getTestEmail } from "@/domains/email/lib/test-email";

async function sendTestEmail() {
  try {
    const testEmail = await getTestEmail();
    await sendEmail(testEmail);
    console.log("Test email sent successfully");
  } catch (error) {
    console.error("Failed to send test email:", error);
  }
}

export { sendTestEmail };
