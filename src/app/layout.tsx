import type { Metadata } from "next";

import "./globals.css";
import { NavBar } from "@/components/core";
import "../../public/fonts/style.css";

export const metadata: Metadata = {
  title: "e-menu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="m-auto max-w-[575px]">
        <div className="h-screen bg-gray-100 overflow-auto max-w-[575px] w-full ">
          {children}
        </div>
      </body>
    </html>
  );
}
