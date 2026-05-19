import type { Metadata } from "next";

import { Header } from "@/components/layouts/Header/Header";
import { NavDrawer } from "@/components/layouts/NavDrawer/NavDrawer";

import localFont from 'next/font/local'
import "./globals.scss";
import { Backdrop } from "@/components/ui/Backdrop/Backdrop";

const pretendard = localFont({
  src: [
    {
      path: '../../public/fonts/PretendardVariable.ttf',
      weight: '100 900',
      style: 'normal',
    },
  ],
  variable: '--font-pretendard',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "ZERO_C",
  description: "탄소배출발자국 대시보드",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${pretendard.variable}`}>
      <body>
        <Header />
        <NavDrawer />
        <Backdrop />
        {children}
      </body>
    </html>
  );
}
