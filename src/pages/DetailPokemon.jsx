import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PokemonDetailsView from "../components/organisms/PokemonDetailsView";

export default function DetailPokemon() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [pokemon, setPokemon] = useState(null);
    const [activeTab, setActiveTab] = useState("about");

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
                const data = await res.json();

                const speciesRes = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
                const speciesData = await speciesRes.json(); 

                const description = speciesData.flavor_text_entries
                    .find(entry => entry.language.name === 'en')?.flavor_text
                    .replace(/\f/g, ' ') || 'No description available.';

                const heightInMeters = (data.height / 10).toFixed(1);
                const weightInKg = (data.weight / 10).toFixed(1);

                const abilities = data.abilities.map(ability => 
                    ability.ability.name.charAt(0).toUpperCase() + ability.ability.name.slice(1)
                );

                const getTypeWeaknesses = (types) => {
                    const weaknessMap = {
                        grass: ['fire', 'ice', 'poison', 'flying', 'bug'],
                        poison: ['ground', 'psychic'],
                        fire: ['water', 'ground', 'rock'],
                        water: ['electric', 'grass'],
                        electric: ['ground'],
                        normal: ['Fighting'],
                        fighting: ['Flying', 'Psychic', 'Fairy'],
                        flying: ['Electric', 'Ice', 'Rock'],
                        ground: ['Water', 'Grass', 'Ice'],
                        rock: ['Water', 'Grass', 'Fighting'],
                        bug: ['Fire', 'Flying', 'Rock'],
                        ghost: ['Ghost', 'Dark'],
                        steel: ['Fire', 'Fighting', 'Ground'],
                        psychic: ['Bug', 'Ghost', 'Dark'],
                        ice: ['Fire', 'Fighting', 'Rock'],
                        dragon: ['Ice', 'Dragon', 'Fairy'],
                        dark: ['Fighting', 'Bug', 'Fairy'],
                        fairy: ['Poison', 'Steel']
                    };
                    
                    const allWeaknesses = new Set();
                    types.forEach(type => {
                        const weaknesses = weaknessMap[type.toLowerCase()] || [];
                        weaknesses.forEach(w => allWeaknesses.add(w));
                    });

                    return Array.from(allWeaknesses).slice(0, 4); // Limit to 4
                };


                const pokemonTypes = data.types.map(t => t.type.name);
                const weaknesses = getTypeWeaknesses(pokemonTypes);


                const pokemonDetails = {
                    about: {
                        description,
                        species: speciesData.genera.find(g => g.language.name === 'en')?.genus || 'Unknown Pokémon',
                        height: `${heightInMeters}m (${Math.round(heightInMeters * 3.28)}'${Math.round((heightInMeters * 3.28 % 1) * 12)}")`,
                        weight: `${weightInKg}kg (${(weightInKg * 2.205).toFixed(1)} lbs)`,
                        abilities,
                        weaknesses
                    },
                    stats: data.stats.map(stat => ({
                        name: stat.stat.name.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()),
                        value: stat.base_stat
                    })),
                    evolution: {
                        message: "Evolution data not implemented yet"
                    }
                };

                setPokemon({
                  id: data.id,
                  number: data.id,
                  name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
                  types: pokemonTypes,
                  image: data.sprites.other["official-artwork"].front_default,
                  generation: "Generation 1",
                  details: pokemonDetails
                });
            } catch (error) {
                console.error("Failed to fetch Pokémon", error);
                navigate("/");
            }
        };

        fetchPokemon();
    }, [id, navigate])
    

    const handlePrev = () => {
      const prevId = Math.max(1, parseInt(id) - 1);
      navigate(`/pokemon/${prevId}`);
    };

    const handleNext = () => {
      const nextId = parseInt(id) + 1;
      navigate(`/pokemon/${nextId}`);
    };

    const handleGoBack = () => {
      navigate("/");
    };

    if (!pokemon) return <p style={{ textAlign: "center" }}>Loading...</p>;
    
    return (
       <PokemonDetailsView 
            pokemon={pokemon}
            activeTab={activeTab}
            onTabChange={setActiveTab}
            onGoBack={handleGoBack}
            onPrev={handlePrev}
            onNext={handleNext}
       />
    );
}