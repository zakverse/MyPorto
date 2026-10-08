import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Dzaki Khothir — Informatics Engineering & AI / ML",
  description:
    "Portfolio of Dzaki Khothir, Informatics Engineering student at Telkom University. Building practical software, computer vision systems, and web applications.",
  authors: [{ name: "Dzaki Khothir", url: "https://github.com/zakverse" }],
  keywords: [
    "Dzaki Khothir",
    "Informatics Engineering",
    "Telkom University",
    "Artificial Intelligence",
    "Machine Learning",
    "Computer Vision",
    "Software Engineering",
    "RoadDamage-AI",
    "PneumoVision-AI",
    "Purwokerto",
  ],
  openGraph: {
    title: "Dzaki Khothir — Informatics Engineering & AI / ML",
    description:
      "Building practical software and AI solutions through machine learning, data, and modern web technologies.",
    url: "https://github.com/zakverse",
    siteName: "Dzaki Khothir Portfolio",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <head>
        {/* Inline script to prevent theme flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme');
                if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="font-sans min-h-screen flex flex-col bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 antialiased selection:bg-zinc-900 selection:text-white dark:selection:bg-zinc-100 dark:selection:text-zinc-900">
        {children}
      </body>
    </html>
  );
}
