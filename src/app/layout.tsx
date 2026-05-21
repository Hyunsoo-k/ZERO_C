import type { Metadata } from "next";

import { Header } from "@/components/layouts/Header/Header";
import { NavDrawer } from "@/components/layouts/NavDrawer/NavDrawer";
import { Backdrop } from "@/components/ui/Backdrop/Backdrop";
import { PostDetailModal } from "@/components/modals/PostDetailModal/PostDetailModal";
import { AlertModal } from "@/components/modals/AlertModal/AlertModal";
import { SearchCompanyModal } from "@/components/modals/SearchCompanyModal/SearchCompanyModal";
import { QueryProvider } from "@/components/QueryProvider/QueryProvider";

import localFont from 'next/font/local'
import "./globals.scss";

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
        <QueryProvider>
          <Header />
          <NavDrawer />
          <Backdrop />
          <SearchCompanyModal />
          <AlertModal />
          <PostDetailModal />
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
