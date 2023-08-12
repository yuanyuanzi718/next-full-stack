import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import dayjs from "dayjs";
import Link from "next/link";
import type { Metadata } from "next";

async function getData() {
  const res = await fetch(process.env.URL + "/api/news/sport", {
    method: "GET",
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export const metadata: Metadata = {
  title: "体育新闻",
  description: "体育新闻",
};

async function SportPage() {
  const { data } = await getData();
  return (
    <div className={styles.container}>
      <ul className={styles.ul}>
        {data.map((item: any) => {
          return (
            <Link href={`/news/sport/${item.id}`} key={item.id}>
              <li className={styles.li}>
                <div className={styles.image}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={150}
                    height={150}
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className={styles.liRight}>
                  <p>{item.title}</p>
                  <p>{dayjs(item.updatedAt).format("YYYY/MM/DD hh:mm:ss")}</p>
                </div>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default SportPage;
