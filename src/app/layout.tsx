
import type { Metadata } from "next";

import {Inter} from "next/font/google"
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';
import { ThemeProvider } from "@/app/providers/ThemeProvider";


const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['200','300','400', '600', '700'],
})

export const metadata: Metadata = {
  title: "Bajomo Oluwasemilore",
  description: "Created by Bajomo oluwasemilore",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${inter.className} antialiased text-lg`}
      >
        <ThemeProvider >
          {children}
          <Analytics/>
        </ThemeProvider>
      </body>
    </html>
  );
}
