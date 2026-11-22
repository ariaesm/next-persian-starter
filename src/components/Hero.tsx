"use client";

import { useState } from "react";
import { Check, Copy, ArrowLeft, Terminal, Rocket } from "lucide-react";

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const cloneCommand = "git clone https://github.com/ariaesm/next-persian-starter.git my-app";

  const handleCopy = () => {
    navigator.clipboard.writeText(cloneCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-blue-500/20 to-purple-500/20 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="container mx-auto max-w-5xl px-4 text-center">
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-50/50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 text-xs font-medium mb-6 backdrop-blur-sm animate-pulse">
          <Rocket className="w-3.5 h-3.5" />
          <span>نسخه ۱.۰ آماده برای Next.js 15 و React 19</span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.25] sm:leading-[1.2] mb-6">
          قالب مدرن و سئو-محور{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-l from-blue-600 to-indigo-500">
            Next.js 15
          </span>{" "}
          با پشتیبانی کامل فارسی
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-10">
          دیگر نیازی به کانفیگ دستی فونت وزیرمتن، سئو، تنظیمات پیچیده RTL و ابزارهای اعتبارسنجی فارسی ندارید.
          همه چیز در یک معماری تمیز و آماده پروداکشن در اختیارتان قرار گرفته است.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12">
          <a
            href="#playground"
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>بررسی دموی ابزارها</span>
            <ArrowLeft className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/ariaesm/next-persian-starter"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl border border-slate-300 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-sm transition-all shadow-sm"
          >
            <span>مشاهده سورس در گیت‌هاب</span>
          </a>
        </div>

        {/* Terminal Quick Copy */}
        <div className="max-w-xl mx-auto" id="quickstart">
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-900 text-slate-100 p-3 sm:p-4 shadow-xl flex items-center justify-between gap-3 text-left dir-ltr">
            <div className="flex items-center gap-2.5 overflow-x-auto text-xs sm:text-sm font-mono text-slate-300">
              <Terminal className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="text-slate-500">$</span>
              <span className="whitespace-nowrap">{cloneCommand}</span>
            </div>
            <button
              onClick={handleCopy}
              aria-label="کپی دستور"
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors shrink-0"
            >
              {copied ? (
                <Check className="w-4 h-4 text-emerald-400" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>
          <p className="text-xs text-slate-400 mt-2.5 text-center">
            آماده برای اجرا با <code className="text-blue-500 font-mono">bun</code>,{" "}
            <code className="text-blue-500 font-mono">pnpm</code> یا{" "}
            <code className="text-blue-500 font-mono">npm</code>
          </p>
        </div>
      </div>
    </section>
  );
}
