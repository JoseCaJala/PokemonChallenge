import Typography from "../atoms/Typhopgraphy";
import Badge from "../atoms/Badge";
//import "./PokemonInfo.scss";

function PokemonInfo({ name, number, types }) {
  return (
    <div className="pokemon-info">
      <Typography 
        variant="number" 
        size="small" 
        color="muted"
        className="pokemon-info__number"
      >
        #{String(number).padStart(3, '0')}
      </Typography>
      
      <Typography 
        variant="title" 
        size="xlarge" 
        color="white"
        weight="bold"
        className="pokemon-info__name"
      >
        {name}
      </Typography>
      
      <div className="pokemon-info__types">
        {types.map((type, idx) => (
          <Badge 
            key={idx} 
            label={type.label} 
            color={type.color} 
            size="medium"
          />
        ))}
      </div>
    </div>
  );
}

export default PokemonInfo;