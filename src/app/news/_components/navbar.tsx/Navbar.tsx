"use client";
import React from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

const links = [
  { id: 1, title: "体育", url: "/news/sport" },
  { id: 2, title: "经济", url: "/news/economy" },
  { id: 3, title: "健康", url: "/news/health" },
  { id: 4, title: "汽车", url: "/news/cars" },
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
      </div>
    </div>
  );
};

export default Navbar;
