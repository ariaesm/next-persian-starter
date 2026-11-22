import {
  Sparkles,
  Zap,
  Globe2,
  Search,
  Moon,
  Layers,
  Wrench,
  CheckCircle2,
} from "lucide-react";

const features = [
  {
    icon: Globe2,
    title: "بومی‌سازی کامل RTL و فونت وزیرمتن",
    description:
      "پیکربندی هوشمند با فونت Vazirmatn از طریق next/font بدون نیاز به دانلود دستی و با بهینه‌ترین سایز لود فونت.",
  },
  {
    icon: Search,
    title: "موتور سئوی فوق‌پیشرفته (SEO Ready)",
    description:
      "تنظیم داینامیک متاتگ‌ها، کارت‌های OpenGraph، تولید خودکار sitemap.xml و robots.ts به همراه Schema.org استاندارد.",
  },
  {
    icon: Zap,
    title: "Next.js 15 + React 19 + TypeScript",
    description:
      "استفاده از آخرین استانداردها و سرعت باورنکردنی App Router با کامپوننت‌های Server و Client تفکیک‌شده.",
  },
  {
    icon: Wrench,
    title: "مجموعه ابزارهای کاربردی وب فارسی",
    description:
      "تبدیل تاریخ جلالی بدون پکیج‌های سنگین، فرمت قیمت به تومان و ریال، اعتبارسنجی کد ملی و موبایل و اسلاگ‌ساز فارسی.",
  },
  {
    icon: Moon,
    title: "حالت تاریک و روشن (Dark / Light)",
    description:
      "سیستم تغییر تم بدون پرش رنگ (FOUC) با ذخیره‌سازی در localStorage و همگام با سلیقه سیستم کاربر.",
  },
  {
    icon: Layers,
    title: "معماری تمیز و آماده پروداکشن",
    description:
      "ساختار پوشه‌بندی استاندارد، پیکربندی کامل Tailwind CSS و گیت‌هاب اکشنز CI برای بیلد و تایپ‌چک اتوماتیک.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/30">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/70 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>امکانات کلیدی</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            هر آنچه برای استارت یک وب‌سایت فارسی لازم دارید
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            طراحی شده با استانداردهای مدرن فرانت‌اند برای صرفه‌جویی در ساعت‌ها کانفیگ تکراری اولیه.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="group relative p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 shadow-sm hover:shadow-md transition-all hover:border-blue-500/40 dark:hover:border-blue-500/40"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2.5">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
