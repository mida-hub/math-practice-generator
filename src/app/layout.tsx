import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "算数プリント自動生成",
  description: "小学1年生向けの算数マトリクス計算プリントを自動生成します",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
