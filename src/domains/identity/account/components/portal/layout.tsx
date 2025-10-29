import { AccountPortalSidebar } from "@/domains/identity/account/components/portal/sidebar";
import { cn } from "@/lib/utils";

function AccountPortalLayout({
  className,
  view,
}: {
  className?: string;
  view: "page" | "panel";
}) {
  return (
    <div className={cn("flex size-full", className)}>
      <AccountPortalSidebar view={view} />
      <div className="flex-1">
        <h1>Welcome to your account portal</h1>
      </div>
    </div>
  );
}

export { AccountPortalLayout };
