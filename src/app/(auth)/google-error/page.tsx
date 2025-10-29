import Link from "next/link";
import { redirect } from "next/navigation";
import { oauthErrorSchema } from "@/domains/identity/auth/validators";
import type { NextSearchParamsType } from "@/lib/types";

export default async function GoogleErrorPage({
  searchParams,
}: {
  searchParams: NextSearchParamsType;
}) {
  const error = (await searchParams).error;
  const result = oauthErrorSchema.safeParse(error);

  if (result.success) {
    const errorType = result.data;
    if (errorType === "access_denied") {
      redirect("/sign-in");
    }
  }

  return (
    <div className="h-full flex flex-col items-center justify-center gap-y-2">
      <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Sorry, something went wrong
      </h1>
      <p className="text-center">
        Please try again later or contact support if the problem persists.
      </p>
      <Link href="/sign-in" className="text-underline">
        Back to sign in
      </Link>
    </div>
  );
}
