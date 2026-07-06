import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import ClickSpark from "../components/ClickSpark";

const displayFont = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "TEANEMA | Grow Your Brand. Dominate Your Market.",
  description: "Data-driven SEO, performance marketing, and content strategies that actually move revenue — not just vanity metrics. No contracts. No jargon. Just growth you can measure.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#3E2723] font-sans selection:bg-blue-600 selection:text-white">
        <ClickSpark
          sparkColor="#F27224"
          sparkSize={27}
          sparkRadius={30}
          sparkCount={8}
          duration={400}
        >
          {children}
        </ClickSpark>
      </body>
    </html>
  );
}
