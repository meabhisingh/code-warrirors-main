import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

export default function SettingsAppearancePage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Appearance</h3>
        <p className="text-sm text-muted-foreground">
          Customize the appearance of the app. Automatically switch between day
          and night themes.
        </p>
      </div>
      <Separator />
      <AppearanceForm />
    </div>
  );
}

const AppearanceForm = () => {
  return (
    <form className="space-y-8">
      <div className="relative w-max space-y-2">
        <Label>Font</Label>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="inter">Inter</SelectItem>
            <SelectItem value="manrope">Manrope</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
        <p className=" text-sm font-light opacity-80">
          Set the font you want to use in the dashboard.
        </p>
      </div>

      <div className="space-y-1">
        <Label>Theme</Label>
        <p className="text-sm font-light opacity-80">
          Select the theme for the dashboard.
        </p>

        <RadioGroup className="grid max-w-md grid-cols-2 gap-8 pt-2">
          <div>
            <Label className="[&:has([data-state=checked])>div]:border-primary">
              <RadioGroupItem value="light" className="sr-only" />
              <LightBox />
              <span className="block w-full p-2 text-center font-normal">
                Light
              </span>
            </Label>
          </div>
          <div>
            <Label className="[&:has([data-state=checked])>div]:border-primary">
              <RadioGroupItem value="dark" className="sr-only" />

              <DarkBox />
              <span className="block w-full p-2 text-center font-normal">
                Dark
              </span>
            </Label>
          </div>
        </RadioGroup>
      </div>
      <Button type="submit">Update preferences</Button>
    </form>
  );
};

const LightBox = () => (
  <div className="items-center rounded-md border-2 border-muted p-1 hover:border-accent">
    <div className="space-y-2 rounded-sm bg-[#ecedef] p-2">
      <div className="space-y-2 rounded-md bg-white p-2 shadow-sm">
        <div className="h-2 w-[80px] rounded-lg bg-[#ecedef]" />
        <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
      </div>
      <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
        <div className="h-4 w-4 rounded-full bg-[#ecedef]" />
        <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
      </div>
      <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
        <div className="h-4 w-4 rounded-full bg-[#ecedef]" />
        <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
      </div>
    </div>
  </div>
);

const DarkBox = () => (
  <div className="items-center rounded-md border-2 border-muted bg-popover p-1 hover:bg-accent hover:text-accent-foreground">
    <div className="space-y-2 rounded-sm bg-slate-950 p-2">
      <div className="space-y-2 rounded-md bg-slate-800 p-2 shadow-sm">
        <div className="h-2 w-[80px] rounded-lg bg-slate-400" />
        <div className="h-2 w-[100px] rounded-lg bg-slate-400" />
      </div>
      <div className="flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-sm">
        <div className="h-4 w-4 rounded-full bg-slate-400" />
        <div className="h-2 w-[100px] rounded-lg bg-slate-400" />
      </div>
      <div className="flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-sm">
        <div className="h-4 w-4 rounded-full bg-slate-400" />
        <div className="h-2 w-[100px] rounded-lg bg-slate-400" />
      </div>
    </div>
  </div>
);
