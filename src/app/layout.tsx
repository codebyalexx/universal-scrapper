import { ThemeProvider } from "@/features/theme/ThemeProvider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Universal Scraper",
  description: "Scrape Everything from Everywhere",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
        "m-6 bg-background h-full",
        inter.className
      )}>
        <ThemeProvider attribute={'class'} defaultTheme={'system'} enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
