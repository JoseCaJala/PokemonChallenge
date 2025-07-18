import { useState } from "react";

export default function PokemonSilouette({
    pokemonImage,
    pokemonName,
    isRevealed = false,
    onReveal
}) {
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoaded = () => {
        setImageLoaded(true);
    };

    const handleReveal = () => {
        if (onReveal) {
            onReveal();
        }
    };

    return (
        <div className={styles.container}>
            <div className={`${style.imageContainer} ${isRevealed ? styles.revealed : ''}`}>
                <Image 
                    src={pokemonImage}
                    alt={isRevealed ? pokemonName : "?"}
                    onLoad={handleImageLoaded}
                />
                {!isRevealed && (
                  <div className={styles.silhouette}>
                    <div className={styles.questionMark}>?</div>
                  </div>
                )}
            </div>

        </div>
    )
}