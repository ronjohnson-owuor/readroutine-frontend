import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Provider from "./provider";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "read routine",
  description: "Get into the habit of reading",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning >
      <body
        className={`${geistSans.variable} m-0 w-full min-h-screen ${geistMono.variable} antialiased bg-lightBg dark:bg-darkBg text-lightText dark:text-darkText`}
      >
       <Provider> {children}</Provider>
      </body>
    </html>
  );
}
