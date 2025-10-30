import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

type AccountPanelTabProps = {
  title: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

function AccountPanelTab({
  title,
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
        {title}
      </h2>
      <Separator className="my-2" />
      {children}
    </div>
  );
}

export { AccountPanelTab };
