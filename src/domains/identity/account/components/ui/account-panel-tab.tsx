import { Separator } from "@/components/ui/separator";
import type { AccountPanelTabType } from "@/domains/identity/account/types";
import { cn } from "@/lib/utils";

type AccountPanelTabProps = {
  tab: AccountPanelTabType;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

function AccountPanelTab({
  tab,
  children,
  className,
  ...props
}: AccountPanelTabProps) {
  return (
    <div
      className={cn(
        "flex-1 rounded-lg bg-background p-5 flex flex-col gap-y-2",
        className
      )}
      {...props}
    >
      <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        {tab}
      </h2>
      <Separator className="my-2" />
      {children}
    </div>
  );
}

export { AccountPanelTab };
