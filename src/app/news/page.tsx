import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Hero from "../../../public/news/hero.png";

function NewsPage() {
  return (
    <div className={styles.box}>
      <div className={styles.item}>
        <h1 className={styles.title}>世界就在眼前.</h1>
        <p className={styles.desc}>
          我们是一个致力于为您提供全面、客观、及时的新闻报道的专业平台。我们的使命是通过深入调查和广泛报道，为您呈现全球范围内的重要事件、热点话题和最新资讯。
        </p>
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="" className={styles.img} />
      </div>
    </div>
  );
}

export default NewsPage;
