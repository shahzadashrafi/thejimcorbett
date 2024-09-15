import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { url } from "inspector";
//others

const inter = Inter({ subsets: ["latin"] });





export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body className="px-1 sm:px-[15%] bg-gradient-to-tr from-teal-300 to-green-500">
        
        <main>
          
        {children}
        
        </main>
      </body>
    </html>
  );
}


