"use server";

import { sendEmail } from "@/domains/email/lib/send";
import { testEmail } from "@/domains/email/lib/test-email";

async function sendTestEmail() {
  try {
    await sendEmail(testEmail);
    console.log("Test email sent successfully");
  } catch (error) {
    console.error("Failed to send test email:", error);
  }
}

export { sendTestEmail };
