/**
 * Persian Utility Tools for Web Applications
 * Author: Aria Esmaeilzadeh (https://github.com/ariaesm)
 */

const PERSIAN_DIGITS = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
const ARABIC_DIGITS = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];

/**
 * Converts English and Arabic numbers to Persian numbers
 */
export function toPersianDigits(input: string | number): string {
  if (input === null || input === undefined) return "";
  let str = input.toString();
  for (let i = 0; i < 10; i++) {
    str = str.replace(new RegExp(`${i}`, "g"), PERSIAN_DIGITS[i]);
    str = str.replace(new RegExp(ARABIC_DIGITS[i], "g"), PERSIAN_DIGITS[i]);
  }
  return str;
}

/**
 * Converts Persian and Arabic numbers to standard English digits
 */
export function toEnglishDigits(input: string | number): string {
  if (!input) return "";
  let str = input.toString();
  for (let i = 0; i < 10; i++) {
    str = str.replace(new RegExp(PERSIAN_DIGITS[i], "g"), `${i}`);
    str = str.replace(new RegExp(ARABIC_DIGITS[i], "g"), `${i}`);
  }
  return str;
}

/**
 * Formats a number with comma separators (e.g., 1,500,000)
 */
export function formatNumberWithCommas(input: number | string, usePersianDigits = true): string {
  const clean = toEnglishDigits(input).replace(/[^0-9.-]/g, "");
  if (!clean) return "";
  const parts = clean.split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const formatted = parts.join(".");
  return usePersianDigits ? toPersianDigits(formatted) : formatted;
}

/**
 * Formats price in Toman or Rial with proper currency suffix
 */
export function formatPrice(
  amount: number | string,
  unit: "toman" | "rial" = "toman"
): string {
  const formatted = formatNumberWithCommas(amount, true);
  if (!formatted) return "۰ تومان";
  return `${formatted} ${unit === "toman" ? "تومان" : "ریال"}`;
}

/**
 * Validates Iranian National ID (کد ملی ۱۰ رقمی با الگوریتم چکسام رسمی)
 */
export function isValidIranianNationalCode(input: string): boolean {
  if (!input) return false;
  const code = toEnglishDigits(input).trim();
  if (!/^\d{10}$/.test(code)) return false;

  // Check repeating digits like 1111111111
  const allEqual = /^(.)\1{9}$/.test(code);
  if (allEqual) return false;

  const check = parseInt(code[9], 10);
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(code[i], 10) * (10 - i);
  }

  const remainder = sum % 11;
  return (remainder < 2 && check === remainder) || (remainder >= 2 && check === 11 - remainder);
}

/**
 * Validates Iranian Mobile Phone Numbers (0912..., +98912..., 912...)
 */
export function isValidIranianMobile(input: string): boolean {
  if (!input) return false;
  const clean = toEnglishDigits(input).replace(/[\s-]/g, "");
  const iranMobileRegex = /^(?:(?:\+|00)98|0)?9\d{9}$/;
  return iranMobileRegex.test(clean);
}

/**
 * Validates Iranian Bank Card Numbers using Luhn Algorithm
 */
export function isValidBankCard(input: string): boolean {
  if (!input) return false;
  const card = toEnglishDigits(input).replace(/[\s-]/g, "");
  if (!/^\d{16}$/.test(card)) return false;

  let sum = 0;
  for (let i = 0; i < 16; i++) {
    let digit = parseInt(card[i], 10);
    if (i % 2 === 0) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    sum += digit;
  }

  return sum % 10 === 0;
}

/**
 * Generates SEO-friendly Persian slugs (clean URL friendly)
 */
export function persianSlugify(text: string): string {
  if (!text) return "";
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\u0600-\u06FF\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

/**
 * Lightweight pure JavaScript Jalali converter (zero external dependency)
 */
export function getJalaliDate(date = new Date()): {
  year: number;
  month: number;
  day: number;
  monthName: string;
  formatted: string;
} {
  const g_y = date.getFullYear();
  const g_m = date.getMonth() + 1;
  const g_d = date.getDate();

  const g_days_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const j_days_in_month = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29];

  const j_months = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند",
  ];

  const gy = g_y - 1600;
  const gm = g_m - 1;
  const gd = g_d - 1;

  let g_day_no =
    365 * gy +
    Math.floor((gy + 3) / 4) -
    Math.floor((gy + 99) / 100) +
    Math.floor((gy + 399) / 400);

  for (let i = 0; i < gm; ++i) g_day_no += g_days_in_month[i];
  if (gm > 1 && ((gy % 4 === 0 && gy % 100 !== 0) || gy % 400 === 0)) ++g_day_no;
  g_day_no += gd;

  let j_day_no = g_day_no - 79;
  const j_np = Math.floor(j_day_no / 12053);
  j_day_no %= 12053;

  let jy = 979 + 33 * j_np + 4 * Math.floor(j_day_no / 1461);
  j_day_no %= 1461;

  if (j_day_no >= 366) {
    jy += Math.floor((j_day_no - 1) / 365);
    j_day_no = (j_day_no - 1) % 365;
  }

  let jm = 0;
  for (let i = 0; i < 11 && j_day_no >= j_days_in_month[i]; ++i) {
    j_day_no -= j_days_in_month[i];
    jm = i + 1;
  }
  const jd = j_day_no + 1;

  const monthName = j_months[jm];
  const formatted = `${toPersianDigits(jd)} ${monthName} ${toPersianDigits(jy)}`;

  return {
    year: jy,
    month: jm + 1,
    day: jd,
    monthName,
    formatted,
  };
}
