import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";
import Company from "public/company.jpeg";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          fill={true}
          src={Company}
          alt="pauls"
          className={styles.img}
        ></Image>
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storrytellers</h1>
          <h2 className={styles.imgDesc}>Handrafting award winning digital </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who we are?</h1>
          <p className={styles.dsc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
            sequi similique ipsam debitis atque unde soluta id voluptatem
            doloremque quod, ea totam natus officia hic, accusantium nihil
            blanditiis quisquam autem!
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
            veritatis voluptatum deleniti ullam veniam perferendis error illum
            consequatur corrupti, non eos necessitatibus laborum placeat,
            dolorem omnis ipsam voluptas. Vel, voluptatibus.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What we do?</h1>
          <p className={styles.dsc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
            sequi similique ipsam debitis atque unde soluta id voluptatem
            doloremque quod, ea totam natus officia hic, accusantium nihil
            blanditiis quisquam autem!
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
            veritatis voluptatum deleniti ullam veniam perferendis error illum
            consequatur corrupti, non eos necessitatibus laborum placeat,
            dolorem omnis ipsam voluptas. Vel, voluptatibus.
          </p>
          <Button url="contact" text="Contact"></Button>
        </div>
      </div>
    </div>
  );
};

export default About;
