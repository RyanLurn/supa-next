import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { AccountPanelTab } from "@/domains/identity/account/components/ui/account-panel-tab";
import { UserAvatar } from "@/domains/identity/account/components/ui/user-avatar";
import { authClient } from "@/domains/identity/lib/auth-client";

function AccountPanelProfileTab() {
  const { data } = authClient.useSession();
  return (
    <AccountPanelTab title="Profile details">
      <div className="flex w-full items-center">
        <h3 className="text-md w-1/3 text-left font-semibold">Profile</h3>
        <div className="flex flex-1 items-center gap-x-2">
          {data ? (
            <>
              <UserAvatar className="size-12" image={data.user.image} />
              <p>{data.user.name}</p>
            </>
          ) : (
            <>
              <Skeleton className="size-12 rounded-full" />
              <Skeleton className="h-5 w-25" />
            </>
          )}
        </div>
      </div>
      <Separator className="my-2" />
      <div className="flex w-full items-center">
        <h3 className="text-md w-1/3 text-left font-semibold">Email address</h3>
        <div className="flex flex-1 items-center gap-x-2">
          {data ? <p>{data.user.email}</p> : <Skeleton className="h-5 w-25" />}
        </div>
      </div>
    </AccountPanelTab>
  );
}

export { AccountPanelProfileTab };
