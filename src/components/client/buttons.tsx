"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useTheme } from "./providers";
import { Sun, Moon } from "lucide-react";

const ThemeToggleButton = () => {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className=" text-xl outline-none">
        {theme === "dark" ? <Moon /> : <Sun />}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className={theme === "dark" ? "bg-zinc-900 border-none text-white" : ""}
      >
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { ThemeToggleButton };
