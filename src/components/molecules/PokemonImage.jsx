import Image from "../atoms/Image";
//import "./PokemonImage.scss";

function PokemonImage({ src, alt, size = "large" }) {
  return (
    <div className="pokemon-image-container">
      <Image 
        src={src} 
        alt={alt} 
        size={size}
        className="pokemon-image-container__image"
      />
    </div>
  );
}

export default PokemonImage;