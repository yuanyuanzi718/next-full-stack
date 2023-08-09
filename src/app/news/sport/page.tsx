// "use client";
import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import dayjs from "dayjs";

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

async function SportPage() {
  const { success, data } = await getData();
  console.log(data, "qianduan");
  // useEffect(() => {
  //   fetch(`/api/news/sport`)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log(res, "res");
  //     });
  // }, []);

  return (
    <div className={styles.container}>
      <ul className={styles.ul}>
        {data.map((item: any) => {
          return (
            <li key={item.id} className={styles.li}>
              <Image src={item.image} alt={item.title} width={150} height={150} className={styles.image} />
              <div className={styles.liRight}>
                <p>{item.title}</p>
                <p>{dayjs(item.updatedAt).format("YYYY/MM/DD hh:mm:ss")}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SportPage;
