import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./_components/navbar.tsx/Navbar";
import Footer from "./_components/footer/Footer";
import styles from "./index.module.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "新闻门户网站",
  description: "新闻",
};
function Newslayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
}

export default Newslayout;
