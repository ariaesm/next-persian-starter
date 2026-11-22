import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "قالب آماده Next.js 15 فارسی",
    short_name: "Next Persian",
    description: "قالب مدرن Next.js 15 با پشتیبانی کامل فارسی و RTL",
    start_url: "/",
    display: "standalone",
    background_color: "#090d16",
    theme_color: "#2563eb",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
