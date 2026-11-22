import Link from "next/link";
import { Github, Sparkles, Star } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-slate-950/70 backdrop-blur-md transition-colors">
      <div className="container mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        {/* Logo & Brand */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
            <Sparkles className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base tracking-tight text-slate-900 dark:text-white">
              Next Persian Starter
            </span>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 -mt-0.5">
              Next.js 15 + TypeScript + RTL
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
          <Link href="#features" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            ویژگی‌ها
          </Link>
          <Link href="#playground" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            آزمایشگاه ابزارها
          </Link>
          <Link href="#quickstart" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            شروع سریع
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <a
            href="https://github.com/ariaesm/next-persian-starter"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-xl bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 hover:opacity-90 transition-opacity shadow-sm"
          >
            <Github className="w-4 h-4" />
            <span className="hidden sm:inline">گیت‌هاب</span>
            <span className="inline-flex items-center gap-0.5 bg-white/20 dark:bg-slate-900/20 px-1.5 py-0.5 rounded text-[11px]">
              <Star className="w-3 h-3 fill-current" />
              <span>Star</span>
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
