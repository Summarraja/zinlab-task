import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";

export default function Card({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <a href="#" className={styles.container}>
      <Image src={icon} alt="crop pdf" width={64} height={64} />
      <h2 className={styles.title}>{title} </h2>
      <div className={styles.description}>{description}</div>
    </a>
  );
}
