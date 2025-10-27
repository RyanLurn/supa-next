import type { EmailType } from "@/domains/email/types";

const testEmail: EmailType = {
  subject: "Test Email",
  from: "test@example.com",
  text: "This is a test email.",
  html: "<p>This is a test email.</p>",
  to: "test@example.com",
};

export { testEmail };
