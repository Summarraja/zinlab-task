"use client";
import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";

export default function SearchBar({}: {}) {
  return (
    <div className={styles.container}>
      <input
        onFocus={() => {
          document.body.style.backdropFilter = "blur(70%)";
        }}
        className={styles.input}
        type="text"
        placeholder="Search for Movies, TV Shows, Themes & Cast"
        name="search"
        autoComplete="off"
      />
      <div className={styles.icon}>
        <Image src={"/icons/search.png"} alt="icon" width={20} height={20} />
      </div>
      <div className={styles.dropdown}>
        <div className={styles.trendsLabel}>TRENDS</div>
        {[
          "castaway",
          "War against machines",
          "prophecy",
          "native american",
        ].map((text) => {
          return (
            <div key={text} className={styles.searchLabel}>
              <span className={styles.hash}>#</span>
              {text}
            </div>
          );
        })}
      </div>
    </div>
  );
}
