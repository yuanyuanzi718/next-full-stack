import React from "react";
import { notFound } from "next/navigation";
import styles from "./page.module.css";

async function getData(id: string) {
  const res = await fetch(`${process.env.URL}/api/news/sport/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    return notFound();
  }
  return res.json();
}

async function SportIdPage({ params }: any) {
  const { data } = await getData(params.id);

  return (
    <div className={styles.container}>
      <div dangerouslySetInnerHTML={{ __html: data.content }} className={styles.content} />
    </div>
  );
}

export default SportIdPage;
