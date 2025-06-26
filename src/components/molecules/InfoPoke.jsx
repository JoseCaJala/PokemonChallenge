import styles from './InfoPoke.module.css';
import Text from '../../components/atoms/Text';
import Badge from '../../components/atoms/Badge';

export default function PokemonInfo({ number, name, types }) {
  return (
    <div className={styles.info}>
      <Text type="subtitle">#{number.toString().padStart(3, '0')}</Text>
      <Text type="title">{name}</Text>
      <div className={styles.badges}>
        {types.map((type) => (
          <Badge key={type} type={type} />
        ))}
      </div>
    </div>
  );
}