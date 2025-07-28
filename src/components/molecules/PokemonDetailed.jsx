import Text from "../atoms/Text";
import Badge from "../atoms/Badge";
import styles from "./PokemonDetailed.module.css";

export default function PokemonDetailed({ number, name, generation, types }) {
  return (
    <div className={styles.container}>
      <Text type="small" className={styles.number}>#{number}</Text>
      <Text type="title" className={styles.name}>{name}</Text>
      <Text type="small" className={styles.gen}>{generation}</Text>

      <div className={styles.badges}>
        {types.map((type) => (
          <Badge key={type} type={type} />
        ))}
      </div>
    </div>
  );
}
