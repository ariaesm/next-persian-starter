import Link from "next/link";
import { Github, Heart, Globe, Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-950 py-12 transition-colors">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8 text-center md:text-right">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
              <Sparkles className="w-4 h-4" />
            </div>
            <span className="font-bold text-slate-900 dark:text-white">
              Next Persian Starter Kit
            </span>
          </div>

          <div className="flex items-center gap-6 text-xs text-slate-500 dark:text-slate-400 font-medium">
            <a
              href="https://github.com/ariaesm/next-persian-starter"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              مخزن گیت‌هاب
            </a>
            <a
              href="https://ariaesm.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              وب‌سایت سازنده
            </a>
            <a
              href="https://github.com/ariaesm/next-persian-starter/blob/main/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              لایسنس MIT
            </a>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-100 dark:border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-500">
          <p>
            توسعه داده شده با <Heart className="w-3.5 h-3.5 inline text-rose-500 fill-current mx-0.5" /> توسط{" "}
            <a
              href="https://github.com/ariaesm"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Aria Esmaeilzadeh
            </a>
          </p>
          <p className="dir-ltr font-mono text-[11px]">
            MIT License © 2026 Aria Esmaeilzadeh
          </p>
        </div>
      </div>
    </footer>
  );
}
