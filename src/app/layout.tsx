import type { Metadata } from "next";
import { Encode_Sans } from "next/font/google";
import "./globals.css";
const encodeSans = Encode_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Game Time Plus",
  description: "Player tracking for your favorite sports",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${encodeSans.className} antialiased dark`}>

        <div className="flex justify-center items-center min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
