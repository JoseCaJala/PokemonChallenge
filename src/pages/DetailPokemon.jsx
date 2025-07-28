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

                const generation = "Gen 1";

                const details = {
                  about: [
                    { title: "Height", value: `${data.height / 10} m` },
                    { title: "Weight", value: `${data.weight / 10} kg` },
                    { title: "Base Experience", value: data.base_experience },
                  ],
                  stats: data.stats.map(stat => ({
                    title: stat.stat.name,
                    value: stat.base_stat
                  })),
                  moves: data.moves.slice(0, 5).map(m => ({
                    title: m.move.name,
                    value: "✔"
                  }))
                };

                setPokemon({
                  id: data.id,
                  number: data.id,
                  name: data.name,
                  types: data.types.map(t => t.type.name),
                  image: data.sprites.other["official-artwork"].front_default,
                  generation,
                  details
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