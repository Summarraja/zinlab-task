"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";

export default function Slider({
  items,
  displayCount,
}: {
  items: React.ReactNode[];
  displayCount: number;
}) {
  const [index, setIndex] = useState(0);
  return (
    <div>
      <div className={styles.container}>
        {index > 0 && (
          <Image
            className={styles.arrowLeft}
            onClick={() => {
              setIndex((prev) => prev - 1);
            }}
            src={"/icons/left-arrow.png"}
            alt="icon"
            width={30}
            height={30}
          />
        )}
        {[...items].splice(index, displayCount).map((item) => {
          return item;
        })}
        {items.length - displayCount - index > 0 && (
          <Image
            className={styles.arrowRight}
            onClick={() => {
              setIndex((prev) => prev + 1);
            }}
            src={"/icons/left-arrow.png"}
            alt="icon"
            width={30}
            height={30}
          />
        )}
      </div>
    </div>
  );
}
