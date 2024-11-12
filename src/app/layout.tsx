import { Cursor } from "@/components/client/cursor";
import { ThemeProvider } from "@/components/client/providers";
import ScrollIndicator from "@/components/client/scroll-indigator";
import Footer from "@/components/server/footer";
import Header from "@/components/server/header";
import type { Metadata } from "next";
import "./globals.css";
import { barlowCondensed, inter, roboto_mono, ubuntu } from "./fonts";

export const metadata: Metadata = {
  title: "Code Warriros",
  description: "Code Warriros",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="hide-scrollbar" lang="en">
      <body
        className={`cursor-none ${inter.className} ${roboto_mono.variable} ${ubuntu.variable} ${barlowCondensed.variable} antialiased  `}
      >
        <ThemeProvider>
          <>
            <Header />
            <ScrollIndicator />
            {children}
            <Footer />
            <Cursor />
          </>
        </ThemeProvider>
      </body>
    </html>
  );
}
