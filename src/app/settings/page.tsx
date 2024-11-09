// import { updateProfile } from "@/actions/user";
// import { getUser } from "@/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { User } from "next-auth";
import React from "react";

const updateProfile = async () => {
  "use server";
};

// Add form to update Profile
const Page = async () => {
  // const user = await getUser();
  const user = { name: "John Doe", email: "" };

  return (
    <div className="space-y-6">
      <h4 className="text-lg">Profile</h4>

      <p className=" text-sm  opacity-80">
        Change your name and email address.
      </p>

      <Separator />

      <UpdateProfileForm user={user} />
    </div>
  );
};

const UpdateProfileForm = ({ user }: { user?: User }) => {
  return (
    <form action={updateProfile} className="max-w-[800px] space-y-6 my-2">
      <div className="space-y-2">
        <Label>Name</Label>
        <Input
          placeholder="Name..."
          defaultValue={user?.name || ""}
          name="name"
        />
      </div>

      <div className="space-y-2">
        <Label>Email</Label>
        <Input
          placeholder="Email..."
          defaultValue={user?.email || ""}
          name="email"
        />
      </div>

      <Button>Update profile</Button>
    </form>
  );
};

export default Page;
