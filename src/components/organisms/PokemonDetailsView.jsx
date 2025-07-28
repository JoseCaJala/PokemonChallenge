import ArrowButton from "../atoms/ArrowButton";
import PokemonDetailed from "../molecules/PokemonDetailed";
import TabBar from "../molecules/TabBar";
import PokemonDetailCard from "../molecules/PokemonDetailCard";
import PokemonAboutCard from "../molecules/PokemonAboutCard";
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

  const formatSectionData = () => {
  switch (activeTab) {
    case "about": {

        const about = pokemon.details.about;
        return [
          {
            title: "Description",
            paragraph: about.description,
          },
          {
            title: "Species",
            paragraph: about.species,
          },
          {
            title: "Height",
            paragraph: about.height,
          },
          {
            title: "Weight",
            paragraph: about.weight,
          },
          {
            title: "Abilities",
            items: about.abilities,
          },
          {
            title: "Weaknesses",
            items: about.weaknesses,
          }
        ];
    }

    case "stats":
      return pokemon.details.stats.map(stat => ({
        title: stat.name,
        paragraph: String(stat.value),
      }));

    case "evolution":
      return [
        {
          title: "Evolution Info",
          paragraph: pokemon.details.evolution.message,
        },
      ];

    default:
      return [];
  }
};


  /*const renderTabContent = () => {
    switch(activeTab) {
      case "about":
        return <PokemonAboutCard aboutData={pokemon.details.about} />;
      case "stats":
        return <PokemonAboutCard aboutData={pokemon.details.stats} isStats={true} />;
      case "evolution":
        return <PokemonAboutCard aboutData={pokemon.details.evolution} isEvolution={true} />;
      default:
        return <PokemonAboutCard aboutData={pokemon.details.about} />;
    }
  };*/

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

        <TabBar 
            activeTab={activeTab} 
            onTabChange={onTabChange}
        />

        <PokemonDetailCard sections={formatSectionData()} />
      </div>

      {/* Right Column */}
      <div className={styles.right}>
        <TypeBackground type={primaryType}>
            <PokemonControl
              src={pokemon.image}
              alt={pokemon.name}
              onPrev={onPrev}
              onNext={onNext}
              pokemonNumber={pokemon.number}
            />
        </TypeBackground>
      </div>
    </div>
  );
}

