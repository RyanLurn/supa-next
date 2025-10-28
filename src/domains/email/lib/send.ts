import { err, ok } from "neverthrow";
import { getTestMessageUrl } from "nodemailer";
import { Resend } from "resend";
import { createEtherealTransport } from "@/domains/email/lib/ethereal";
import type { EmailType } from "@/domains/email/types";
import { serverEnvVars } from "@/env/server";

async function sendEmail({ subject, from, text, html, to }: EmailType) {
  if (process.env.NODE_ENV === "production") {
    const resend = new Resend(serverEnvVars.RESEND_API_KEY);
    const { data, error } = await resend.emails.send({
      from,
      to,
      subject,
      text,
      html,
    });

    if (error) {
      return err(error);
    }

    return ok(data);
  } else {
    try {
      const transporter = await createEtherealTransport();
      const result = await transporter.sendMail({
        from,
        to,
        subject,
        text,
        html,
      });
      console.log("Preview URL:", getTestMessageUrl(result));
      return ok(result);
    } catch (error) {
      return err(error);
    }
  }
}

export { sendEmail };
