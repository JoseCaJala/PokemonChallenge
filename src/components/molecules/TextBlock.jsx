import Text from "../atoms/Text";
import styles from "./TextBlock.module.css";

export default function TextBlock({ title, paragraph, items = [] }) {
  return (
    <div className={styles.container}>
      <Text type="subtitle" className={styles.title}>{title}</Text>
      <Text type="body" className={styles.paragraph}>{paragraph}</Text>
      <ul className={styles.list}>
        {items.map((item, index) => (
          <li key={index} className={styles.item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
