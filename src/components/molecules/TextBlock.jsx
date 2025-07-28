import Text from "../atoms/Text";
import Badge from "../atoms/Badge";
import styles from "./TextBlock.module.css";

export default function TextBlock({ title, paragraph, items = [] }) {
  const isWeaknesses = title === "Weaknesses";
  const isAbout = title === "About this Pokémon:";
  
  return (
    <div className={styles.container}>
      <Text type="subtitle" className={styles.title}>{title}</Text>
      {paragraph && (
        <Text type="body" className={`${styles.paragraph} ${isAbout ? styles.aboutText : ''}`}>
          {paragraph}
        </Text>
      )}
      {items.length > 0 && (
        <div className={styles.list}>
          {isWeaknesses ? (
            <div className={styles.weaknessBadges}>
              {items.map((item, index) => (
                <Badge key={index} type={item.toLowerCase()} />
              ))}
            </div>
          ) : (
            <ul className={styles.itemList}>
              {items.map((item, index) => (
                <li key={index} className={styles.item}>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
