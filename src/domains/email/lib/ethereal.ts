import "server-only";
import { createTestAccount, createTransport } from "nodemailer";

async function createEtherealTransport() {
  const testAccount = await createTestAccount();
  const transporter = createTransport({
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
    host: "smtp.ethereal.email",
    secure: false,
    port: 587,
  });

  return transporter;
}

export { createEtherealTransport };
