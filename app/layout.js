import Link from "next/link";
import Image from "next/image";
import "./globals.css";
import {
  Inter,
  Nunito_Sans,
  Josefin_Sans,
  Kaushan_Script,
} from "next/font/google";
import MainNav from "@/components/MainNav/MainNav";
import FooterNav from "@/components/FooterNav/FooterNav";

const inter = Inter({ subsets: ["latin"] });

const nunito_sans_init = Nunito_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "500", "700"],
  style: ["normal", "italic"],
  variable: "--font-nunito_sans",
});

const josefin_sans_init = Josefin_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "700"],
  style: ["normal", "italic"],
  variable: "--font-josefin_sans",
});

const kaushan_script_init = Kaushan_Script({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
  variable: "--font-kaushan_script",
});

export const metadata = {
  title: "Kelsey Kuno Developer & Designer",
  description: "Kelsey Kuno's developer and designer portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${nunito_sans_init.variable} ${josefin_sans_init.variable} ${kaushan_script_init.variable}`}
      >
        <header>
          <MainNav />
        </header>
        <div>{children}</div>
        <footer>
          <FooterNav />
        </footer>
      </body>
    </html>
  );
}
