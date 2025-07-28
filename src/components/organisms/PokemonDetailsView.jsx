import ArrowButton from "../atoms/ArrowButton";
import PokemonDetailed from "../molecules/PokemonDetailed";
import TabBar from "../molecules/TabBar";
import PokemonDetailCard from "../molecules/PokemonDetailCard";
import TypeBackground from "../atoms/TypeBackground";
import PokemonControl from "../molecules/PokemonControl";

import styles from "./PokemonDetailsView.module.css";

export default function PokemonDetailsView({
  pokemon,
  activeTab,
  onTabChange,
  onGoBack,
  onPrev,
  onNext
}) {
  if (!pokemon || !pokemon.types || pokemon.types.length === 0) {
    return null;
  }

  const primaryType = pokemon.types[0];

  return (
    <div className={styles.wrapper}>
      {/* Left Column */}
      <div className={styles.left}>
        <ArrowButton onClick={onGoBack} />

        <PokemonDetailed
          number={pokemon.number}
          name={pokemon.name}
          generation={pokemon.generation}
          types={pokemon.types}
        />

        <TabBar activeTab={activeTab} onTabChange={onTabChange} />

        <PokemonDetailCard sections={pokemon.details[activeTab]} />
      </div>

      {/* Right Column */}
      <div className={styles.right}>
        <TypeBackground type={primaryType}>
            <PokemonControl
              src={pokemon.image}
              alt={pokemon.name}
              onPrev={onPrev}
              onNext={onNext}
            />
        </TypeBackground>
      </div>
    </div>
  );
}