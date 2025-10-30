import { DialogContent } from "@/components/ui/dialog";
import { AccountPanelSidebar } from "@/domains/identity/account/components/panel/sidebar/account-panel-sidebar";

function AccountPanel() {
  return (
    <DialogContent className="flex h-5/6 w-4xl gap-0 bg-sidebar p-0 sm:max-w-4xl">
      <AccountPanelSidebar />
      <div className="flex-1">
        <h1>Account Panel</h1>
      </div>
    </DialogContent>
  );
}

export { AccountPanel };
