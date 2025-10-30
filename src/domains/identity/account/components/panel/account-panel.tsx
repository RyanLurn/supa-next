import { useCallback, useState } from "react";
import { DialogContent } from "@/components/ui/dialog";
import { AccountPanelSidebar } from "@/domains/identity/account/components/panel/sidebar/account-panel-sidebar";
import { AccountPanelPreferencesTab } from "@/domains/identity/account/components/panel/tabs/account-panel-preferences-tab";
import { AccountPanelProfileTab } from "@/domains/identity/account/components/panel/tabs/account-panel-profile-tab";
import type { AccountPanelTabType } from "@/domains/identity/account/types";

function AccountPanel() {
  const [activeTab, setActiveTab] = useState<AccountPanelTabType>("Profile");

  const switchTab = useCallback((tab: AccountPanelTabType) => {
    setActiveTab(tab);
  }, []);

  return (
    <DialogContent className="flex h-5/6 w-4xl gap-0 bg-sidebar p-0 sm:max-w-4xl">
      <AccountPanelSidebar activeTab={activeTab} switchTab={switchTab} />
      {activeTab === "Profile" && <AccountPanelProfileTab />}
      {activeTab === "Preferences" && <AccountPanelPreferencesTab />}
    </DialogContent>
  );
}

export { AccountPanel };
