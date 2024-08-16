import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ExpressUp",
  description: "How's your Mood?",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>header</header>
        {children}
        <footer>footer</footer>
      </body>
    </html>
  );
}
