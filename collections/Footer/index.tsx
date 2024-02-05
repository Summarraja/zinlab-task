import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
const MenuItemsList = [
  {
    haeding: "Internal Links",
    links: [
      { name: "Documentries", href: "#" },
      { name: "Themes", href: "#" },
      { name: "Chrome casts", href: "#" },
    ],
  },
  {
    haeding: "Enterprise",
    links: [
      { name: "Download Chrome Browser", href: "#" },
      { name: "Chrome Browser for Enterprise", href: "#" },
      { name: "Chrome Browser Devices", href: "#" },
      { name: "Chrome OS", href: "#" },
      { name: "Google Cloud", href: "#" },
      { name: "Google Workspace", href: "#" },
    ],
  },
  {
    haeding: "Internal Links",
    links: [
      { name: "Documentries", href: "#" },
      { name: "Themes", href: "#" },
      { name: "Chrome casts", href: "#" },
    ],
  },
  {
    haeding: "Enterprise",
    links: [
      { name: "Download Chrome Browser", href: "#" },
      { name: "Chrome Browser for Enterprise", href: "#" },
      { name: "Chrome Browser Devices", href: "#" },
      { name: "Chrome OS", href: "#" },
      { name: "Google Cloud", href: "#" },
      { name: "Google Workspace", href: "#" },
    ],
  },
  {
    haeding: "Internal Links",
    links: [
      { name: "Documentries", href: "#" },
      { name: "Themes", href: "#" },
      { name: "Chrome casts", href: "#" },
    ],
  },
];
export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <span className={styles.followText}>Follow us</span>
          <ul className={styles.list}>
            <li>
              <a className={styles.a} href="https://www.youtube.com/">
                <Image
                  src={"/icons/youtube.svg"}
                  alt="icon"
                  width={25}
                  height={25}
                />
              </a>
            </li>
            <li>
              <a className={styles.a} href="https://www.twitter.com/">
                <Image
                  src={"/icons/twitter.svg"}
                  alt="icon"
                  width={25}
                  height={25}
                />
              </a>
            </li>
            <li>
              <a className={styles.a} href="https://www.facebook.com/">
                <Image
                  src={"/icons/facebook.svg"}
                  alt="icon"
                  width={25}
                  height={25}
                />
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.center}>
          {MenuItemsList.map((item, i) => {
            return (
              <div key={i} className={styles.navBox}>
                <h3 className={styles.navHeading}>{item.haeding}</h3>
                <ul className={styles.navList}>
                  {item.links.map((li, j) => {
                    return (
                      <li key={j}>
                        <a className={styles.navListItem} href={li.href}>
                          {li.name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <div className={styles.end}>
          <div className={styles.logoContainer}>
            <a className={styles.logoWrap} title="Go to home page" href="/">
              <div className={styles.similarWatchContainer}>
                <span className={styles.similar}>Similar</span>
                <span className={styles.watchContainer}>
                  <span className={styles.watch}>Watch</span>
                </span>
              </div>
            </a>
            <div className={styles.iconContainer1}>
              <button
                data-tooltip-id="ts-tooltip"
                data-tooltip-content="Change Theme"
                className={styles.icon}
              >
                <Image
                  src={"/icons/moon.svg"}
                  alt="icon"
                  width={24}
                  height={24}
                />
              </button>
            </div>
          </div>

          <ul className={styles.endList}>
            {[
              { name: "Privacy Policy", href: "#" },
              { name: "Terms and Conditions", href: "#" },
              { name: "Cookies Policy", href: "#" },
              { name: "About Us", href: "#" },
              { name: "EULA", href: "#" },
              { name: "Contact", href: "#" },
            ].map((item, i) => {
              return (
                <li key={i}>
                  <a className={styles.endListItem} href={item.href}>
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className={styles.iconContainer2}>
            <button
              data-tooltip-id="ts-tooltip"
              data-tooltip-content="Change Theme"
              className={styles.icon}
            >
              <Image
                src={"/icons/moon.svg"}
                alt="icon"
                width={24}
                height={24}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
