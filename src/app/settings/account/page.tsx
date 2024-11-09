import { authenticateUser } from "@/actions/project";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { User } from "@prisma/client";

const Page = async () => {
  const user = await authenticateUser();

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Account</h3>
        <p className="text-sm text-muted-foreground">
          Update your account settings.
        </p>
      </div>
      <Separator />
      <AccountForm user={user} />
    </div>
  );
};

const AccountForm = ({ user }: { user: User }) => {
  return (
    <form action="" className="max-w-[800px] space-y-6 my-2">
      {user?.password ? (
        <div className="space-y-2">
          <Label>Old Password</Label>
          <Input placeholder="Your old password..." type="password" />
        </div>
      ) : null}
      <div className="space-y-2">
        <Label>New Password</Label>
        <Input placeholder="Your new password..." type="password" />
      </div>
      <div className="space-y-2">
        <Label>Confirm Password</Label>
        <Input placeholder="Confirm your new password..." type="password" />
      </div>

      <Button>Change Password</Button>
    </form>
  );
};

export default Page;
