import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Hero from "../../../public/news/hero.png";
import Button from "@/app/news/_components/Button/Button";

function NewsPage() {
  return (
    <div className={styles.box}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better design for your digital products.</h1>
        <p className={styles.desc}>Turning your Idea into Reality. We bring together the teams from the global tech industry.</p>
        <Button url="/news/protfolio" text="See Our Works" />
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="" className={styles.img} />
      </div>
    </div>
  );
}

export default NewsPage;
