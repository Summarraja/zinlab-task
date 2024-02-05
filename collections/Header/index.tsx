import Image from "next/image";
import SearchBar from "@/components/SearchBar";
import Button from "@/components/Button";
import styles from "./page.module.css";

export default function Header() {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.titleContainer}>
          <Image
            src={"/icons/settings.png"}
            alt="icon"
            width={30}
            height={30}
          />
          <div className={styles.title}>ZinTools</div>
        </div>
        <div className={styles.search}>
          <SearchBar />
        </div>
        <div className={styles.socialButtonsContainer}>
          <Button title="Log in" type="hollow" />
          <Button title="Sign up" type="solid" />
        </div>
      </header>
    </div>
  );
}
