import { Metadata } from "next";
import { SidebarNav } from "@/components/client/sidebar";
import { Separator } from "@/components/ui/separator";
import { getUser } from "@/auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Settings",
  description: "Settings page",
};

const sidebarNavItems = [
  {
    title: "Profile",
    href: "/settings",
  },
  {
    title: "Account",
    href: "/settings/account",
  },
  {
    title: "Appearance",
    href: "/settings/appearance",
  },
  {
    title: "Notifications",
    href: "/settings/notifications",
  },
];

interface SettingsLayoutProps {
  children: React.ReactNode;
}

const SettingsLayout = async ({ children }: SettingsLayoutProps) => {
  const user = await getUser();

  if (!user) return redirect("/login");

  return (
    <div className="min-h-lvh space-y-6 p-10 pb-16  bg-white dark:text-white  dark:bg-zinc-900">
      <div className="space-y-0.5">
        <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
        <p className="text-muted-foreground">
          Manage your account settings and update your profile information.
        </p>
      </div>
      <Separator className="my-6" />
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <aside className="-mx-4 lg:w-1/5">
          <SidebarNav items={sidebarNavItems} />
        </aside>
        <div className="flex-1 lg:max-w-2xl">{children}</div>
      </div>
    </div>
  );
};

export default SettingsLayout;
