import React from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import {Raleway} from "next/font/google";

const raleway = Raleway({subsets: ["latin"]});

import Container from "@/components/Container";

// metadata
export const metadata = {
  title: "Dafi Nurrohman Maulana | Frontend Develooper",
  author: "Dafi Nurrohman Maulana",
  keywords:
    "Dafi, Nurrohman, Maulana, Web Developer, frontend develooper, nextjs, reactjs, tailwindcss, javascript, jsx, laravel, html, css, bootstrap, react native, figma, UI/UX Designer",
  description: "Saya adalah seorang freelancer frontend developer yang selalu siap membantu anda kapan pun dan dimanapun",
};

export default function RootLayout({children}) {
  return (
    <html lang="en" className="scrollbar-none scroll-smooth">
      <body className={raleway.className}>
        <Navbar />
        {children}
        {/* footer */}
        <Container className={"mt-[200px] border-t border-accent/20 text-center py-7"}>
          <p>© 2022 Dafi Nurrohman Maulana</p>
        </Container>
      </body>
    </html>
  );
}
