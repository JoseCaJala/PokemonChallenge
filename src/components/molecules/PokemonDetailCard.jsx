import TextBlock from "./TextBlock";
import styles from "./PokemonDetailCard.module.css";

export default function PokemonDetailCard({ sections = [] }) {
  return (
    <div className={styles.card}>
      {sections.map((section, index) => (
        <TextBlock
          key={index}
          title={section.title}
          paragraph={section.paragraph}
          items={section.items}
        />
      ))}
    </div>
  );
}
