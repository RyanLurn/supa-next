import { useCallback, useState } from "react";
import { DialogContent } from "@/components/ui/dialog";
import { AccountPanelSidebar } from "@/domains/identity/account/components/panel/sidebar/account-panel-sidebar";
import type { AccountPanelTabType } from "@/domains/identity/account/types";

function AccountPanel() {
  const [activeTab, setActiveTab] = useState<AccountPanelTabType>("Profile");

  const switchTab = useCallback((tab: AccountPanelTabType) => {
    setActiveTab(tab);
  }, []);

  return (
    <DialogContent className="flex h-5/6 w-4xl gap-0 bg-sidebar p-0 sm:max-w-4xl">
      <AccountPanelSidebar activeTab={activeTab} switchTab={switchTab} />
      <div className="flex-1 rounded-lg bg-background p-5 flex flex-col gap-y-2">
        <h1>Account Panel</h1>
        <p>{activeTab}</p>
      </div>
    </DialogContent>
  );
}

export { AccountPanel };
