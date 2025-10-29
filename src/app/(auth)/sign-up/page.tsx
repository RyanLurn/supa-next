import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ContinueWithGoogle } from "@/domains/identity/auth/components/oauth/continue-with-google";

export default function SignUpPage() {
  return (
    <div className="h-full flex flex-col items-center justify-center gap-y-5">
      <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Sign up
      </h1>
      <ContinueWithGoogle />
      <p className="text-center">
        Already have an account?{" "}
        <Button variant="link" asChild className="p-0 ml-1">
          <Link href="/sign-in">Sign in</Link>
        </Button>
      </p>
    </div>
  );
}
