import Link from "next/link";
import Image from "next/image";
import "./globals.css";
import { Inter, Nunito_Sans, Josefin_Sans } from "next/font/google";

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

export const metadata = {
  title: "Kelsey Kuno Developer & Designer",
  description: "Kelsey Kuno's developer and designer portfolio",
};

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${nunito_sans_init.variable} ${josefin_sans_init.variable}`}
      >
        <header>
          <nav>
            <ul>
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                  <Image></Image>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <div>{children}</div>
      </body>
    </html>
  );
}
