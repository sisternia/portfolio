import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio - Vũ",
  description: "Portfolio cá nhân",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <main className="max-w-4xl mx-auto space-y-20">
          {children}
        </main>
        <footer className="p-6 text-center text-sm text-gray-500">
          © 2025 Nguyễn Đình Anh Vũ - Portfolio
        </footer>
      </body>
    </html>
  );
}
