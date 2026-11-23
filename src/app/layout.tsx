import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans_JP, JetBrains_Mono } from "next/font/google";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "グエン・ディン・アン・ヴー | フルスタックエンジニア ポートフォリオ",
  description:
    "Next.js・React Native・Flutter・Node.js・Pythonを活用したWebおよびモバイルアプリケーション開発ポートフォリオ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} ${jetbrainsMono.variable}`}>
      <body
        style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
        className="min-h-screen bg-[#F7F6F2] text-stone-900 selection:bg-stone-800 selection:text-stone-100"
      >
        {/* Subtle top border accent */}
        <div className="h-1 w-full bg-stone-900" />

        {/* Sticky Header Navigation */}
        <header className="sticky top-0 z-40 border-b border-stone-200/80 bg-[#F7F6F2]/90 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span
                style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
                className="text-xs font-semibold tracking-widest uppercase px-2 py-0.5 bg-stone-900 text-stone-100 rounded"
              >
                PORTFOLIO
              </span>
              <span className="font-bold text-sm sm:text-base text-stone-900 tracking-tight">
                グエン・ディン・アン・ヴー
              </span>
              <span className="hidden md:inline-block text-xs text-stone-500 border-l border-stone-300 pl-3">
                Nguyen Dinh Anh Vu — Full-Stack Developer
              </span>
            </div>

            <nav className="hidden sm:flex items-center gap-6 text-xs font-medium text-stone-600">
              <a href="#overview" className="hover:text-stone-900 transition-colors">
                専門概要
              </a>
              <a href="#skills" className="hover:text-stone-900 transition-colors">
                専門スキル
              </a>
              <a href="#projects" className="hover:text-stone-900 transition-colors">
                プロジェクト
              </a>
              <a href="#achievements" className="hover:text-stone-900 transition-colors">
                活動・実績
              </a>
            </nav>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          {children}
        </main>

        <footer className="border-t border-stone-200/80 bg-stone-100/60 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-stone-700">
                © 2026 Nguyễn Đình Anh Vũ (グエン・ディン・アン・ヴー)
              </span>
              <span>— All Rights Reserved.</span>
            </div>
            <div
              style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
              className="flex items-center gap-4"
            >
              <a
                href="https://github.com/sisternia"
                target="_blank"
                rel="noreferrer"
                className="hover:text-stone-900 underline underline-offset-4"
              >
                github.com/sisternia
              </a>
              <span>•</span>
              <a
                href="mailto:vu784512000@gmail.com"
                className="hover:text-stone-900 underline underline-offset-4"
              >
                vu784512000@gmail.com
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
