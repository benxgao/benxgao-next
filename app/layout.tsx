import type { Metadata } from 'next';
import Script from 'next/script';

import './globals.css';

export const metadata: Metadata = {
  title: 'benxgao.com | Ben Gao',
  description: 'Ben Gao is a web developer based in Auckland, New Zealand.',
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ben Gao",
  url: "https://benxgao.com",
  jobTitle: "Full-Stack JavaScript Developer",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Auckland",
    addressCountry: "New Zealand",
  },
  sameAs: [
    "https://github.com/benxgao",
    "https://linkedin.com/in/benxgao",
    "https://medium.com/@benxgao",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Ben Gao" />
        <meta
          name="keywords"
          content="Ben Gao, Software Engineer, Auckland, New Zealand, Web Development, Programming"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MVNSBVMESW"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MVNSBVMESW');
          `}
        </Script>
      </head>
      <body className={"antialiased"}>{children}</body>
    </html>
  );
}
