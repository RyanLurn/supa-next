import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GoogleSignInButton } from "@/domains/identity/auth/components/oauth/google-sign-in-button";

export default function SignInPage() {
  return (
    <div className="h-full flex flex-col items-center justify-center gap-y-5">
      <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Sign in
      </h1>
      <GoogleSignInButton />
      <p className="text-center">
        Don't have an account?{" "}
        <Button variant="link" asChild className="p-0 ml-1">
          <Link href="/sign-up">Sign up</Link>
        </Button>
      </p>
    </div>
  );
}
