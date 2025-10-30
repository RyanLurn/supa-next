import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

function AccountPanelSidebar() {
  return (
    <div className="flex h-full w-1/4 flex-col gap-y-6 rounded-l-lg p-4">
      <DialogHeader>
        <DialogTitle>Account</DialogTitle>
        <DialogDescription>Manage your account information.</DialogDescription>
      </DialogHeader>
    </div>
  );
}

export { AccountPanelSidebar };
