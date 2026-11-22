export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Next.js 15 Persian Starter Kit",
    "operatingSystem": "Web",
    "applicationCategory": "DeveloperApplication",
    "author": {
      "@type": "Person",
      "name": "Aria Esmaeilzadeh",
      "url": "https://github.com/ariaesm"
    },
    "description": "قالب مدرن، سریع و آماده پروداکشن Next.js 15 همراه با TypeScript، Tailwind CSS، پشتیبانی کامل RTL و فونت وزیرمتن و موتور سئوی پیشرفته.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
