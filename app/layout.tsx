import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Provider from "@/app/provider";
import Header from "@/app/components/layout/header";
import Footer from "@/app/components/layout/footer";
import Slider from "@/app/components/layout/slider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI",
  description: "AI Provider by cskyer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Provider>
        <Header/>
        <main className="container mx-auto pt-12">
          <Slider/>
          <main className="pl-52">
            {children}
          </main>
          <Footer/>
        </main>
      </Provider>
      </body>
    </html>
  );
}
