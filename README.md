<div align="center">

# 🚀 Next.js 15 Persian Starter Kit

### Modern, Production-Ready Next.js 15 Starter with TypeScript, Tailwind CSS, Full RTL, Vazirmatn Font & Advanced SEO

[![Next.js 15](https://img.shields.io/badge/Next.js-15.1-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

<br />

<p align="center">
  <b>قالب استاندارد و مدرن برای شروع سریع پروژه‌های وب فارسی با آخرین استانداردهای فرانت‌اند و سئو</b>
</p>

[ویژگی‌ها](#-امکانات-کلیدی--key-features) •
[شروع سریع](#-شروع-سریع--quick-start) •
[ابزارهای فارسی](#-ابزارهای-وب-فارسی--persian-utilities) •
[معماری و ساختار](#-ساختار-پروژه--project-structure)

<br />

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ariaesm/next-persian-starter)

</div>

---

## 🌟 امکانات کلیدی / Key Features

- ⚡ **Next.js 15 (App Router) + React 19:** بهره‌گیری از معماری مدرن Server و Client Components و ماکسیمم سرعت بیلد.
- 📐 **بومی‌سازی کامل RTL با فونت وزیرمتن (Vazirmatn):** لود بهینه از طریق `next/font/google` بدون پرش رنگ و فونت (Zero FOUC).
- 🔍 **موتور سئوی فوق‌پیشرفته (Built-in SEO):**
  - تنظیم متاتگ‌های داینامیک، OpenGraph و کارت‌های توییتر
  - تولید خودکار و استاندارد `sitemap.xml` و `robots.txt`
  - داده‌های ساختاریافته JSON-LD (Schema.org) برای رتبه ۱ در نتایج جستجوی گوگل
- 🛠️ **ابزارهای بومی و کاربردی وب فارسی (Zero-Dependency):**
  - تبدیل تاریخ شمسی/جلالی بدون نیاز به پکیج‌های سنگین خارجی
  - فرمت قیمت به ریال و تومان به همراه جداسازی سه‌رقمی
  - اعتبارسنجی الگوریتم رسمی چکسام کد ملی ۱۰ رقمی ایران
  - اعتبارسنجی شماره موبایل و کارت‌های بانکی (الگوریتم Luhn)
  - اسلاگ‌ساز تمیز و سئو-فرندلی برای عناوین مقالات فارسی
- 🌙 **پشتیبانی کامل از تم تیره و روشن (Dark / Light Mode):** ذخیره‌سازی در `localStorage` و همگام‌سازی سریع.
- 🎨 **استایل‌دهی با Tailwind CSS:** شامل پالت رنگی حرفه‌ای، فونت‌های فارسی و ابزار `cn()` (ترکیب `clsx` و `tailwind-merge`).
- 🤖 **گیت‌هاب اکشنز آماده (CI/CD):** ورک‌فلو خودکار برای تست Lint، Type-Check و Build روی گیت‌هاب.

---

## 🚀 شروع سریع / Quick Start

### ۱. کلون کردن مخزن:

```bash
git clone https://github.com/ariaesm/next-persian-starter.git my-app
cd my-app
```

### ۲. نصب وابستگی‌ها:

```bash
npm install
# یا با بون
bun install
# یا با pnpm
pnpm install
```

### ۳. اجرای محیط توسعه:

```bash
npm run dev
```

پروژه روی آدرس `http://localhost:3000` به صورت زنده و با هات‌لودینگ اجرا خواهد شد.

---

## 🛠️ ابزارهای وب فارسی / Persian Utilities

تمام توابع به صورت کامل تایپ‌اسکریپت در مسیر `@/lib/persian-tools` در دسترس هستند:

```typescript
import {
  toPersianDigits,
  formatPrice,
  isValidIranianNationalCode,
  isValidIranianMobile,
  getJalaliDate,
  persianSlugify,
} from "@/lib/persian-tools";

// تبدیل اعداد
toPersianDigits("12345"); // "۱۲۳۴۵"

// فرمت قیمت
formatPrice(25000000, "toman"); // "۲۵,۰۰۰,۰۰۰ تومان"

// اعتبارسنجی کد ملی (الگوریتم رسمی ثبت احوال)
isValidIranianNationalCode("0012345678"); // true / false

// اعتبارسنجی شماره موبایل
isValidIranianMobile("09121234567"); // true / false

// تاریخ جلالی امروز
const today = getJalaliDate(); // { year: 1403, monthName: "آذر", formatted: "۲ آذر ۱۴۰۳", ... }

// اسلاگ‌ساز سئو برای بلاگ
persianSlugify("آموزش جامع نکست جی اس در سال ۲۰۲۶"); 
// "آموزش-جامع-نکست-جی-اس-در-سال-2026"
```

---

## 📁 ساختار پروژه / Project Structure

```text
next-persian-starter/
├── .github/workflows/ci.yml    # تست و بیلد اتوماتیک گیت‌هاب
├── src/
│   ├── app/
│   │   ├── globals.css         # استایل‌های سراسری، تم و متغیرها
│   │   ├── layout.tsx          # لی‌اوت ریشه با فونت Vazirmatn و متادیتا
│   │   ├── page.tsx            # صفحه اصلی و نمایش لایو کامپوننت‌ها
│   │   ├── robots.ts           # خروجی استاندارد robots.txt
│   │   ├── sitemap.ts          # خروجی خودکار sitemap.xml
│   │   └── manifest.ts         # مانیفست وب‌اپلیکیشن (PWA Ready)
│   ├── components/
│   │   ├── Navbar.tsx          # هدر و ناوبری با دکمه گیت‌هاب
│   │   ├── ThemeToggle.tsx     # سوییچر تم دارک و لایت
│   │   ├── Hero.tsx            # بخش هیرو و کپی دستور نصب
│   │   ├── Features.tsx        # کارت‌های معرفی قابلیت‌ها
│   │   ├── PersianPlayground.tsx # آزمایشگاه تست آنلاین توابع
│   │   ├── JsonLd.tsx          # اسکیما ساختاریافته Schema.org
│   │   └── Footer.tsx          # فوتر سایت
│   └── lib/
│       ├── persian-tools.ts    # توابع و یوتیلیتی‌های فارسی
│       └── utils.ts            # هلپر ادغام کلاس‌های Tailwind
├── tailwind.config.ts          # تنظیمات فونت و تم تیل‌ویند
└── tsconfig.json               # پیکربندی پیشرفته TypeScript
```

---

## 📈 دستورات موجود / Available Scripts

| دستور | عملکرد |
| :--- | :--- |
| `npm run dev` | اجرای سرور توسعه محلی روی پورت ۳۰۰۰ |
| `npm run build` | ساخت نسخه نهایی پروداکشن بهینه‌شده |
| `npm run start` | اجرای نسخه پروداکشن بیلدشده |
| `npm run type-check` | بررسی و اعتبارسنجی کامل تایپ‌های TypeScript |
| `npm run lint` | بررسی استانداردهای کدنویسی با ESLint |

---

## 🤝 مشارکت / Contributing

پیشنهادات، گزارش باگ‌ها و Pull Requestها با آغوش باز پذیرفته می‌شوند!
اگر این استارتر کیت برایتان مفید بود، خوشحال می‌شویم با دادن یک **Star ⭐️** در گیت‌هاب از پروژه حمایت کنید.

---

## 📄 لایسنس / License

این پروژه تحت لایسنس [MIT](LICENSE) به صورت کاملاً آزاد و اوپن‌سورس منتشر شده است.

<div align="center">
  طراحی و توسعه توسط <b><a href="https://github.com/ariaesm">Aria Esmaeilzadeh</a></b>
</div>
