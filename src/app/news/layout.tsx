import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./_components/navbar.tsx/Navbar";
import Footer from "./_components/footer/Footer";
import styles from "./page.module.css";
import { ThemeProvider } from "./context/ThemeContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "新闻门户网站",
  description: "新闻",
};
function Newslayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.layoutMain}>
      <ThemeProvider>
        <div className={styles.layoutContainer}>
          <Navbar />
          <div className={styles.layoutContent}>{children}</div>
          <Footer />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default Newslayout;
