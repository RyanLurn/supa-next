import { cn } from "@/lib/utils";

function AccountPortalSidebar({ view }: { view: "page" | "panel" }) {
  return (
    <div
      className={cn(
        "flex h-full  flex-col gap-y-6 p-4",
        view === "panel" ? "w-1/4 rounded-l-lg" : "w-1/6 bg-sidebar"
      )}
    >
      <h1>Account Portal</h1>
      <p>Manage your account information.</p>
    </div>
  );
}

export { AccountPortalSidebar };
