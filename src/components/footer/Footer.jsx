import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2023 Bukel. All right reserved.</div>
      <div className={styles.social}>
        <Image
          className={styles.icon}
          src="/1.png"
          width={15}
          height={15}
          alt="pauls"
        ></Image>
        <Image
          className={styles.icon}
          src="/2.png"
          width={15}
          height={15}
          alt="pauls"
        ></Image>
        <Image
          className={styles.icon}
          src="/3.png"
          width={15}
          height={15}
          alt="pauls"
        ></Image>
        <Image
          className={styles.icon}
          src="/4.png"
          width={15}
          height={15}
          alt="pauls"
        ></Image>
      </div>
    </div>
  );
};

export default Footer;
