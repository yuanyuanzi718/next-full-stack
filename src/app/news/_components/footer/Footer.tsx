import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import png1 from "../../../../../public/news/1.png";
import png2 from "../../../../../public/news/2.png";
import png3 from "../../../../../public/news/3.png";
import png4 from "../../../../../public/news/4.png";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2023 陈金辉. All rights reserved.</div>
      <div className={styles.social}>
        <Image src={png1} width={15} height={15} className={styles.icon} alt="Lama Dev Facebook Account" />
        <Image src={png2} width={15} height={15} className={styles.icon} alt="Lama Dev" />
        <Image src={png3} width={15} height={15} className={styles.icon} alt="Lama Dev" />
        <Image src={png4} width={15} height={15} className={styles.icon} alt="Lama Dev" />
      </div>
    </div>
  );
};

export default Footer;
