import { AccountPanelTab } from "@/domains/identity/account/components/ui/account-panel-tab";
import { AccountModeToggle } from "@/domains/identity/account/components/utils/account-mode-toggle";

function AccountPanelPreferencesTab() {
  return (
    <AccountPanelTab title="Preferences">
      <div className="flex w-full items-center justify-between">
        <h3 className="w-1/3 text-left font-semibold">Theme</h3>
        <AccountModeToggle className="min-w-32 justify-start" />
      </div>
    </AccountPanelTab>
  );
}

export { AccountPanelPreferencesTab };
