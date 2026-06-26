import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import ThemeProvider from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";
import LenisProvider from "@/components/LenisProvider";
import "./globals.css";

const siteUrl = "https://dhruv-p.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Dhruv Parmar | Full Stack Developer",
  description:
    "Full Stack Engineer specializing in React, Node.js, MongoDB, and AI applications. Building scalable web and AI products.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png" }],
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Dhruv Parmar | Full Stack Developer",
    description:
      "Full Stack Engineer specializing in React, Node.js, MongoDB, and AI applications.",
    url: siteUrl,
    siteName: "Dhruv Parmar",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dhruv Parmar | Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhruv Parmar | Full Stack Developer",
    description:
      "Full Stack Engineer specializing in React, Node.js, MongoDB, and AI applications.",
    images: ["/og-image.png"],
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
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var t = localStorage.getItem("theme");
                  if (!t) {
                    t = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
                  }
                  if (t === "dark" || t === "light") {
                    document.documentElement.setAttribute("data-theme", t);
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Dhruv Parmar",
              url: siteUrl,
              jobTitle: "Full Stack Developer",
              description:
                "Full Stack Engineer specializing in React, Node.js, MongoDB, and AI applications.",
              sameAs: [
                "https://github.com/dhruvparmar",
                "https://linkedin.com/in/dhruvparmar",
              ],
            }),
          }}
        />
      </head>
      <body>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:rounded-lg focus:bg-accent focus:text-paper focus:outline-none">
          Skip to content
        </a>
        <ThemeProvider>
          <ThemeToggle />
          <LenisProvider>
            {children}
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
