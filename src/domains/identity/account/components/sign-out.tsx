import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Spinner } from "@/components/ui/spinner";
import { authClient } from "@/domains/identity/lib/auth-client";

function SignOutOption() {
  const router = useRouter();
  const [isSigningOut, setIsSigningOut] = useState(false);

  async function handleSignOut(event: Event) {
    event.preventDefault();
    setIsSigningOut(true);
    try {
      const { error } = await authClient.signOut();
      if (error) {
        console.error(error);
        toast.error("Failed to sign out", {
          description: error.message,
        });
      } else {
        router.push("/sign-in");
      }
    } catch {
      console.error("Unexpected error while signing out");
      toast.error("Failed to sign out");
    } finally {
      setIsSigningOut(false);
    }
  }

  return (
    <DropdownMenuItem
      onSelect={(event) => void handleSignOut(event)}
      disabled={isSigningOut}
    >
      {isSigningOut ? (
        <>
          <Spinner />
          Signing out...
        </>
      ) : (
        <>
          <LogOut /> Sign out
        </>
      )}
    </DropdownMenuItem>
  );
}

export { SignOutOption };
