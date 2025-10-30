import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { AccountPanelSidebarItems } from "@/domains/identity/account/components/panel/sidebar/account-panel-sidebar-items";
import type { AccountPanelTabType } from "@/domains/identity/account/types";

function AccountPanelSidebar({
  activeTab,
  switchTab,
}: {
  activeTab: AccountPanelTabType;
  switchTab: (tab: AccountPanelTabType) => void;
}) {
  return (
    <div className="flex h-full w-1/4 flex-col gap-y-6 rounded-l-lg p-4">
      <DialogHeader>
        <DialogTitle>Account</DialogTitle>
        <DialogDescription>Manage your account information.</DialogDescription>
      </DialogHeader>
      <AccountPanelSidebarItems activeTab={activeTab} switchTab={switchTab} />
    </div>
  );
}

export { AccountPanelSidebar };
