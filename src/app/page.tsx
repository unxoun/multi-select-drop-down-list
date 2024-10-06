import styles from "./style.module.scss";
import { MultiSelectDropDownList } from "@/multiSelectDropDownList";

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>
        <MultiSelectDropDownList />
      </div>
    </div>
  );
}
