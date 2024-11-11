import type { Metadata } from "next";
import {Sora} from "next/font/google";
import "./globals.css";
import ResponsiveNavbar from "@/components/Home/Navbar/ResponsiveNavbar";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";





const font = Sora({
  weight: ['100','200','300','400','500','600','700','800',],
  subsets:["latin"]
  
});

export const metadata: Metadata = {
  title: "Jalees Portfolio",
  description: "This is my personal Portfolio, created by myself",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={font.className}>
        <ResponsiveNavbar />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
