import "./css/style.css";
import localFont from "next/font/local";
import "cal-sans";

import { Inter } from "next/font/google";

const calFont = localFont({
  src: "../public/fonts/CalSans-SemiBold.woff2",
  variable: "--font-cal",
  preload: true,
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Prefer OSS",
  description:
    "A reverse open source alternative list of companies looking to replace their proprietary software with open source alternatives.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${calFont.variable} antialiased bg-white text-zinc-900 tracking-tight`}
      >
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>
      </body>
    </html>
  );
}
