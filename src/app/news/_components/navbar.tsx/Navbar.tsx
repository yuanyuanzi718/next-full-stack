"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { usePathname } from "next/navigation";

const links = [
  { id: "sport", title: "体育", url: "/news/sport" },
  { id: "economy", title: "经济", url: "/news/economy" },
  { id: "health", title: "健康", url: "/news/health" },
  { id: "cars", title: "汽车", url: "/news/cars" },
];
const Navbar = () => {
  const pathname = usePathname();
  const [current, SetCurrent] = useState("");

  return (
    <div className={styles.container}>
      <Link href="/news" className={styles.logo}>
        新闻网
      </Link>
      <div className={styles.links}>
        {links.map((link) => (
          <Link
            key={link.id}
            href={link.url}
            className={current === link.id || pathname.includes(link.id) ? styles.type : ""}
            onClick={() => {
              SetCurrent(link.id);
            }}
          >
            {link.title}
          </Link>
        ))}
        <DarkModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
