import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "RoboAnywhere - Automate Your SEO & Backlink Management",
  description:
    "The all-in-one platform for streamlining SEO tasks and enhancing backlink strategy. Automate your SEO, backlink, and domain management with RoboAnywhere.",
  keywords:
    "SEO automation, backlink management, SEO tools, domain management, SEO analytics",
  authors: [{ name: "RoboAnywhere Team" }],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "RoboAnywhere - Automate Your SEO & Backlink Management",
    description:
      "The all-in-one platform for streamlining SEO tasks and enhancing backlink strategy.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "RoboAnywhere - Automate Your SEO & Backlink Management",
    description:
      "The all-in-one platform for streamlining SEO tasks and enhancing backlink strategy.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${robotoMono.variable} font-sans antialiased min-h-screen bg-white`}
      >
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
