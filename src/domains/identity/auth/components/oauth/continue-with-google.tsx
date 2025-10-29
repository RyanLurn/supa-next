"use client";

import { AlertCircle } from "lucide-react";
import { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { GoogleSignInButton } from "@/domains/identity/auth/components/oauth/google-sign-in-button";
import { authClient } from "@/domains/identity/lib/auth-client";

function ContinueWithGoogle() {
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState(false);

  async function handleClick() {
    setIsLoading(true);
    const { error } = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/protected",
    });
    if (error) {
      setErrorMessage(error.message ?? "Unable to continue with Google");
    }
    setIsLoading(false);
  }
  return (
    <>
      <GoogleSignInButton onClick={handleClick} disabled={isLoading} />
      {errorMessage && (
        <Alert variant="destructive">
          <AlertCircle />
          <AlertTitle>Something went wrong</AlertTitle>
          <AlertDescription>{errorMessage}</AlertDescription>
        </Alert>
      )}
    </>
  );
}

export { ContinueWithGoogle };
