"use client";

import { FireBolt } from "6pp";
import { useTheme } from "./providers";

const Cursor = () => {
  const { theme } = useTheme();

  return (
    <FireBolt
      styles={{
        zIndex: 9999,
      }}
      color={theme === "dark" ? "white" : "white"}
      mode={theme === "dark" ? "difference" : "difference"}
      size={40}
    />
  );
};
export { Cursor };
