import { CircleUser, Settings2 } from "lucide-react";
import { PanelSidebarItem } from "@/domains/identity/account/components/ui/account-panel-sidebar-item";
import type { AccountPanelTabType } from "@/domains/identity/account/types";

function AccountPanelSidebarItems({
  activeTab,
  switchTab,
}: {
  activeTab: AccountPanelTabType;
  switchTab: (tab: AccountPanelTabType) => void;
}) {
  return (
    <div className="flex w-full flex-col gap-2">
      <PanelSidebarItem
        tab="Profile"
        icon={<CircleUser />}
        activeTab={activeTab}
        switchTab={switchTab}
      />
      <PanelSidebarItem
        tab="Preferences"
        icon={<Settings2 />}
        activeTab={activeTab}
        switchTab={switchTab}
      />
    </div>
  );
}

export { AccountPanelSidebarItems };
