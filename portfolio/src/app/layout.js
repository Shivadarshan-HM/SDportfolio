import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shiva Darshan — Creative Portfolio",
  description: "Premium creative portfolio by Shiva Darshan. UI/UX Designer & Developer.",
  keywords: ["Shiva Darshan", "portfolio", "UI designer", "developer"],
  openGraph: {
    title: "Shiva Darshan — Creative Portfolio",
    url: "https://s-dportfolio.vercel.app/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}