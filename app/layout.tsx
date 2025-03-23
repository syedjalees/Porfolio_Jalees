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
  title: "Sayyed Jalees | Frontend Developer | Ui/Ux Designer | Portfolio",
  description: "I'm a Frontend Developer and UI/UX Designer specializing in modern, responsive web experiences using Next.js, Tailwind CSS, and TypeScript.",
  keywords:
  "Frontend Developer, UI/UX Designer, Web Development, Next.js, Tailwind CSS, TypeScript, Digital Marketing, Digital Marketer , Canva Designer , Facebook Page Manager",
  authors: [{ name: "Sayyed Jalees", url: "https://porfolio-jalees.vercel.app/" }],
  icons:{
    icon:{url:"/images/Hero.jpeg", type:"image/jpeg"}
  }
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
