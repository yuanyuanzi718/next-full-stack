"use client";
import React from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

const links = [
  { id: 1, title: "Home", url: "/news" },
  { id: 2, title: "Portfolio", url: "/news/portfolio" },
  { id: 3, title: "Blog", url: "/news/blog" },
  { id: 4, title: "About", url: "/news/about" },
  { id: 5, title: "Contact", url: "/news/contact" },
  { id: 6, title: "Dashboard", url: "/news/dashboard" },
];
const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/news" className={styles.logo}>
        新闻网
      </Link>
      <div className={styles.links}>
        <DarkModeToggle />
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        <button className={styles.logout} onClick={() => {}}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
