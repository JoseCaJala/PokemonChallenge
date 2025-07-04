import styles from './PokemonCard.module.css';
import Card from '../../components/atoms/Card';
import Image from '../..//components/atoms/Image';
import PokemonInfo from '../../components/molecules/InfoPoke';

export default function PokemonCard({ pokemon }) {
  const type = pokemon.types[0].type.name;

  return (
      <Card type={type}>
      <div className={styles.content}>
        <div className={styles.info}>
          <PokemonInfo
            number={pokemon.id}
            name={pokemon.name}
            types={pokemon.types.map((t) => t.type.name)}
            />
        </div>

        <div className={styles.image}>
          <Image
            src={pokemon.sprites.other['official-artwork'].front_default}
            alt={pokemon.name}
            />
        </div>
      </div>
      </Card>
  );
}
