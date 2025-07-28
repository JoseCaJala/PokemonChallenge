import Badge from "../atoms/Badge";
import styles from "./PokemonAboutCard.module.css";

export default function PokemonAboutCard({ aboutData, isStats = false, isEvolution = false }) {
  if (isStats) {
    return (
      <div className={styles.card}>
        {aboutData.map((stat, index) => (
          <div key={index} className={styles.statRow}>
            <span className={styles.statName}>{stat.name}</span>
            <span className={styles.statValue}>{stat.value}</span>
          </div>
        ))}
      </div>
    );
  }

  if (isEvolution) {
    return (
      <div className={styles.card}>
        <div className={styles.row}>
          <span className={styles.label}>Evolution Chain:</span>
          <span className={styles.value}>{aboutData.message}</span>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.card}>
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>About this Pokémon:</h3>
        <p className={styles.description}>{aboutData.description}</p>
      </div>

      <div className={styles.row}>
        <span className={styles.label}>Species</span>
        <span className={styles.value}>{aboutData.species}</span>
      </div>

      <div className={styles.row}>
        <span className={styles.label}>Height</span>
        <span className={styles.value}>{aboutData.height}</span>
      </div>

      <div className={styles.row}>
        <span className={styles.label}>Weight</span>
        <span className={styles.value}>{aboutData.weight}</span>
      </div>

      <div className={styles.row}>
        <span className={styles.label}>Abilities</span>
        <div className={styles.value}>
          {aboutData.abilities.map((ability, index) => (
            <span key={index} className={styles.ability}>
              {index + 1}. {ability}
              {ability.toLowerCase().includes('hidden') && 
                <span className={styles.hiddenLabel}> (hidden ability)</span>
              }
            </span>
          ))}
        </div>
      </div>

      <div className={styles.row}>
        <span className={styles.label}>Weaknesses</span>
        <div className={styles.badges}>
          {aboutData.weaknesses.map((weakness, index) => (
            <Badge key={index} type={weakness} isSmall />
          ))}
        </div>
      </div>
    </div>
  );
}