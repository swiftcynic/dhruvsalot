import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import "@/public/css/animate.css";
import "@/public/css/glitche-basic.css";
import "@/public/css/glitche-layout.css"
import "@/public/css/ionicons.css";
import "@/public/css/magnific-popup.css";
// import "@/public/css/template-colors/orange.css";
import State from "../context/context";
import Preloader from "@/layouts/Preloader";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});
export const metadata = {
  title: "Dhruv (swiftcynic) - Portfolio",
  description: "Welcome to my portfolio website showcasing my projects and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={robotoMono.variable}>
        {/* Preloader */}
        <Preloader />
        <State>{children} </State>
      </body>
    </html>
  );
}
