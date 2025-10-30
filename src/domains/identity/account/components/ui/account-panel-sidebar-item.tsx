import { Button } from "@/components/ui/button";
import type { AccountPanelTabType } from "@/domains/identity/account/types";
import { cn } from "@/lib/utils";

type PanelSidebarItemProps = {
  tab: AccountPanelTabType;
  icon: React.ReactNode;
  activeTab: AccountPanelTabType;
  switchTab: (tab: AccountPanelTabType) => void;
} & React.ComponentProps<typeof Button>;

function PanelSidebarItem({
  tab,
  icon,
  activeTab,
  switchTab,
  ...props
}: PanelSidebarItemProps) {
  return (
    <Button
      className={cn(
        "w-full justify-start",
        activeTab === tab &&
          "bg-accent text-accent-foreground dark:bg-accent/50"
      )}
      onClick={() => switchTab(tab)}
      variant="ghost"
      {...props}
    >
      {icon}
      <span className="ml-1">{tab}</span>
    </Button>
  );
}

export { PanelSidebarItem };
