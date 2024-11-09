import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";

const Page = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Notifications</h3>
        <p className="text-sm text-muted-foreground">
          Configure how you receive notifications.
        </p>
      </div>
      <Separator />
      <NotificationsForm />
    </div>
  );
};

const NotificationsForm = () => {
  return (
    <form action="" className="max-w-[800px] space-y-6 my-2">
      <h4 className=" text-lg font-semibold">Email Notifications</h4>
      <div className="flex flex-row items-center justify-between rounded-lg border p-4">
        <div className="space-y-0.5">
          <Label className="text-base">Email notifications</Label>
          <p className="text-sm text-muted-foreground ">
            Receive emails about your project deployment.
          </p>
        </div>
        <Switch />
      </div>

      <div className="flex flex-row items-center justify-between rounded-lg border p-4">
        <div className="space-y-0.5">
          <Label className="text-base">
            Mobile notifications (coming soon)
          </Label>
          <p className="text-sm text-muted-foreground ">
            Receive message on your phone.
          </p>
        </div>
        <Switch disabled />
      </div>

      <Button>Update Notification</Button>
    </form>
  );
};

export default Page;
