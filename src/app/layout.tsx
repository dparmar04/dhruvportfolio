import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import ThemeProvider from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dhruv Parmar | Full Stack Developer",
  description:
    "Full Stack Engineer specializing in React, Node.js, MongoDB, and AI applications. Building scalable web and AI products.",
  openGraph: {
    title: "Dhruv Parmar | Full Stack Developer",
    description:
      "Full Stack Engineer specializing in React, Node.js, MongoDB, and AI applications.",
    type: "website",
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
      </head>
      <body>
        <ThemeProvider>
          <ThemeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
