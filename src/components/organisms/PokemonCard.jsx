import PokemonInfo from "../molecules/InfoPoke";
import PokemonImage from "../molecules/PokemonImage";
import "./PokemonCard.scss";

function PokemonCard({ id, name, types, image, backgroundColor = "#78c850" }) {
  return (
    <div 
      className="pokemon-card"
      style={{ backgroundColor }}
    >
      <div className="pokemon-card__content">
        <PokemonInfo 
          name={name} 
          number={id} 
          types={types} 
        />
      </div>
      
      <div className="pokemon-card__image">
        <PokemonImage 
          src={image} 
          alt={name}
          size="xlarge" 
        />
      </div>
      
      <div className="pokemon-card__pattern"></div>
    </div>
  );
}

export default PokemonCard;