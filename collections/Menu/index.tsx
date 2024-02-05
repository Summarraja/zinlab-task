"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import { useScreenDimensions } from "@/hooks/useScreenDimension";
type Item = { text: string; subItems?: string[] };
export default function Menu({ items }: { items: Item[] }) {
  const [width] = useScreenDimensions();
  const [outerItems, setOuterItems] = useState<Item[]>(items);
  const [innerItems, setInnerItems] = useState<Item[]>([]);

  const count = width ? Math.round(width / 150) : 0;
  useEffect(() => {
    setOuterItems(items.slice(0, count));
    setInnerItems(items.slice(count, -1));
  }, [count, items]);

  function adjustDropdownPosition(index: number) {
    const dropdown = document.querySelector(".dropdown" + index) as HTMLElement;

    const viewportWidth =
      window?.innerWidth || document.documentElement.clientWidth;

    if (
      (dropdown.offsetParent as HTMLElement).offsetLeft +
        (dropdown.offsetParent as HTMLElement).clientWidth +
        100 >
      viewportWidth
    ) {
      dropdown.style.left = `${-100}px`;
    }
  }
  return (
    <div className={styles.menuContainer}>
      {outerItems.map((item, i) => {
        return (
          <div
            key={item.text}
            className={styles.menuItem}
            onMouseOver={() => adjustDropdownPosition(i)}
          >
            {item.text}
            <div className={styles.dropdown + " dropdown" + i}>
              {item.subItems && (
                <div className={styles.dropdownContent}>
                  {item.subItems?.map((si) => {
                    return (
                      <div key={si} className={styles.dropdownItemContainer}>
                        <a href="#" className={styles.dropdownItem}>
                          {si}
                        </a>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        );
      })}
      {items.length > count && (
        <div
          className={styles.menuItem}
          onMouseOver={() => adjustDropdownPosition(-1)}
        >
          More
          <div className={styles.dropdown + " dropdown-1"}>
            <div className={styles.dropdownContent}>
              {innerItems.map((i) => {
                return (
                  <div key={i.text} className={styles.dropdownItemContainer}>
                    <a href="#" className={styles.dropdownItem}>
                      {i.text}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
