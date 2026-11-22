"use client";

import { useState } from "react";
import {
  Calendar,
  CreditCard,
  Phone,
  Hash,
  Sparkles,
  CheckCircle2,
  XCircle,
  FileText,
} from "lucide-react";
import {
  getJalaliDate,
  formatPrice,
  isValidIranianNationalCode,
  isValidIranianMobile,
  persianSlugify,
  toPersianDigits,
} from "@/lib/persian-tools";

export default function PersianPlayground() {
  // States for interactive testing
  const [priceInput, setPriceInput] = useState("12500000");
  const [unit, setUnit] = useState<"toman" | "rial">("toman");

  const [nationalCode, setNationalCode] = useState("0012345678");
  const [mobileNumber, setMobileNumber] = useState("09123456789");
  const [slugText, setSlugText] = useState("آموزش جامع نکست جی اس ۱۵ در سال ۱۴۰۳");

  const todayJalali = getJalaliDate();
  const isNationalValid = isValidIranianNationalCode(nationalCode);
  const isMobileValid = isValidIranianMobile(mobileNumber);

  return (
    <section id="playground" className="py-16 md:py-24">
      <div className="container mx-auto max-w-5xl px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-100/70 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>آزمایشگاه زنده ابزارها</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            تست لایو ماژول‌های وب فارسی
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            توابع تایپ‌اسکریپت بهینه‌شده بدون نیاز به پکیج‌های حجیم سنگین خارجی.
          </p>
        </div>

        {/* Playground Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Jalali Date */}
          <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 text-blue-600 dark:text-blue-400 mb-3">
                <Calendar className="w-5 h-5" />
                <h3 className="font-bold text-base text-slate-900 dark:text-white">
                  تاریخ شمسی امروز (بدون وابستگی)
                </h3>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                تبدیل استاندارد با خروجی سال، نام ماه، روز و رشته فرمت‌شده فارسی.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200/80 dark:border-slate-800/80 text-center">
              <span className="text-xs text-slate-400 block mb-1">تاریخ هجری شمسی:</span>
              <span className="text-xl sm:text-2xl font-black text-blue-600 dark:text-blue-400">
                {todayJalali.formatted}
              </span>
              <div className="mt-3 flex justify-center gap-3 text-xs text-slate-500 font-mono">
                <span>روز: {toPersianDigits(todayJalali.day)}</span>
                <span>•</span>
                <span>ماه: {todayJalali.monthName}</span>
                <span>•</span>
                <span>سال: {toPersianDigits(todayJalali.year)}</span>
              </div>
            </div>
          </div>

          {/* Card 2: Price & Currency */}
          <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
            <div className="flex items-center gap-2.5 text-emerald-600 dark:text-emerald-400 mb-3">
              <CreditCard className="w-5 h-5" />
              <h3 className="font-bold text-base text-slate-900 dark:text-white">
                فرمت‌کننده قیمت و ارقام
              </h3>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
              جداسازی ۳ رقم، ارقام فارسی و افزودن خودکار واحد تومان/ریال.
            </p>
            <div className="space-y-3">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={priceInput}
                  onChange={(e) => setPriceInput(e.target.value)}
                  placeholder="مبلغ را وارد کنید..."
                  className="flex-1 px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-sm font-mono text-slate-800 dark:text-slate-200 outline-none focus:border-emerald-500 transition-colors"
                />
                <button
                  onClick={() => setUnit(unit === "toman" ? "rial" : "toman")}
                  className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors shrink-0"
                >
                  {unit === "toman" ? "تومان" : "ریال"}
                </button>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between">
                <span className="text-xs text-slate-400">خروجی فرمت‌شده:</span>
                <span className="text-base font-bold text-emerald-600 dark:text-emerald-400">
                  {formatPrice(priceInput, unit)}
                </span>
              </div>
            </div>
          </div>

          {/* Card 3: Validation (National Code & Mobile) */}
          <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
            <div className="flex items-center gap-2.5 text-purple-600 dark:text-purple-400 mb-3">
              <Hash className="w-5 h-5" />
              <h3 className="font-bold text-base text-slate-900 dark:text-white">
                اعتبارسنجی کد ملی و موبایل
              </h3>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
              الگوریتم رسمی چکسام کد ملی ۱۰ رقمی و فرمت‌های موبایل ایران.
            </p>
            <div className="space-y-3.5">
              <div>
                <label className="text-xs font-medium text-slate-500 block mb-1">
                  کد ملی ۱۰ رقمی:
                </label>
                <div className="relative">
                  <input
                    type="text"
                    maxLength={10}
                    value={nationalCode}
                    onChange={(e) => setNationalCode(e.target.value)}
                    className="w-full px-3.5 py-2 pl-9 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-sm font-mono text-slate-800 dark:text-slate-200 outline-none focus:border-purple-500 transition-colors"
                  />
                  <div className="absolute left-2.5 top-1/2 -translate-y-1/2">
                    {isNationalValid ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <XCircle className="w-4 h-4 text-rose-500" />
                    )}
                  </div>
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-slate-500 block mb-1">
                  شماره موبایل ایران:
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    className="w-full px-3.5 py-2 pl-9 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-sm font-mono text-slate-800 dark:text-slate-200 outline-none focus:border-purple-500 transition-colors"
                  />
                  <div className="absolute left-2.5 top-1/2 -translate-y-1/2">
                    {isMobileValid ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <XCircle className="w-4 h-4 text-rose-500" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Persian Slugifier */}
          <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 text-amber-600 dark:text-amber-400 mb-3">
                <FileText className="w-5 h-5" />
                <h3 className="font-bold text-base text-slate-900 dark:text-white">
                  اسلاگ‌ساز سئو فرندلی فارسی
                </h3>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                تولید آدرس URL تمیز از عنوان مقاله و پست‌ها بدون کاراکترهای مخرب.
              </p>
              <input
                type="text"
                value={slugText}
                onChange={(e) => setSlugText(e.target.value)}
                placeholder="متن فارسی را وارد کنید..."
                className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-sm text-slate-800 dark:text-slate-200 outline-none focus:border-amber-500 transition-colors mb-3"
              />
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200/80 dark:border-slate-800/80 text-left dir-ltr">
              <span className="text-[11px] text-slate-400 block mb-0.5 text-right font-sans">
                اسلاگ تولیدشده:
              </span>
              <span className="text-xs font-mono text-amber-600 dark:text-amber-400 break-all select-all">
                /{persianSlugify(slugText)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
