// import { Button } from "@/components/ui/button";
// import { Skeleton } from "@/components/ui/skeleton";
// import { AccountPanelTab } from "@/domains/identity/account/components/ui/account-panel-tab";
// import { authClient } from "@/domains/identity/lib/auth-client";

// function AccountPanelProfileTab() {
//   const { data } = await authClient.listAccounts();
//   return (
//     <AccountPanelTab tab="Profile">
//       <div className="flex w-full items-center">
//         <h3 className="text-md w-1/3 text-left font-semibold">Name</h3>
//         <div className="flex flex-1 items-center justify-between">
//           {data ? <p>{data.user.name}</p> : <Skeleton className="h-5 w-25" />}
//           <Button variant="ghost" disabled>
//             Change name
//           </Button>
//         </div>
//       </div>
//     </AccountPanelTab>
//   );
// }

// export { AccountPanelProfileTab };
