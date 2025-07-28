import { Image } from "../atoms/Image";
import { styles } from "./PokemonSilouette.module.css"

export default function PokemonSilouette({
    pokemonImage,
    pokemonName,
    isRevealed = false,
    onReveal
}) {

    const handleReveal = () => {
        if (onReveal) {
            onReveal();
        }
    };

    return (
        <div className={styles.container} onClick={handleReveal}>
            <div className={`${styles.imageContainer} ${isRevealed ? styles.revealed : styles.hidden}`}>
                <Image 
                    src={pokemonImage}
                    alt={isRevealed ? pokemonName : "?"}
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