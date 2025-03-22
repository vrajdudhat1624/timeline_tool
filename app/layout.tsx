import "@/app/globals.css";
import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { AppShell } from "@/components/layout/app-shell";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ChronoScope - Advanced Project Management",
  description: "Next-generation project timeline visualization and management tool",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
     return (
        <html lang="en" suppressHydrationWarning>
          <body className={inter.className}>