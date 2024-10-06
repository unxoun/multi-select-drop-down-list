import styles from "./style.module.scss";
import { MultiSelectDropDown } from "@/multiSelectDropDown";

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>
        <MultiSelectDropDown />
      </div>
    </div>
  );
}
