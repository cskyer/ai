import { ReactNode } from 'react'
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Provider from "@/app/provider"
import AppHeader from "@/app/components/app-header"
import AppSide from "@/app/components/app-aside"

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI",
  description: "AI Provider by cskyer",
};

interface LayoutProps {
    children: ReactNode
}

const Layout = ({
  children,
}: Readonly<LayoutProps>) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} overflow-hidden`}>
      <Provider>
        <AppHeader />
        <main className="flex h-dvh pt-12">
          <AppSide prefix="/nodejs" />
          <main className="pl-52">
            {children}
          </main>
        </main>
      </Provider>
      </body>
    </html>
  );
}

export default Layout
