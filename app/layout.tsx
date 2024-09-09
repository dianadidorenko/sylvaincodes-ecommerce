import type { Metadata } from "next";
import "./globals.css";
import { kanit } from "./fonts";
import * as React from "react";
import Providers from "@/providers";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={kanit.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
