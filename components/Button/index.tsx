import React from "react";
import styles from "./styles.module.css";

export default function Button({
  title,
  type,
}: {
  title: string;
  type: "solid" | "hollow";
}) {
  return (
    <button
      className={`${styles.button} ${styles["button-" + type]}`}
    >
      {title}
    </button>
  );
}
