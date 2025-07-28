import { useEffect, useReducer } from "react";
import Text from "../atoms/Text";
import ImageGame from "../atoms/ImageGame";
import GameOptions from "../molecules/GameOptions";
import styles from "./PokemonGuess.module.css";

const MAX_LIVES = 3; 
const TOTAL_OPTIONS = 4; 

const initialState = {
    pokemon: null,
    options: [],
    lives: MAX_LIVES,
    message: '',
    revealed: false,
    loading: true
};

function reducer(state, action) {
    switch (action.type) {
        case 'SET_POKEMON':
      return {
        ...state,
        pokemon: action.payload.pokemon,
        options: action.payload.options,
        lives: MAX_LIVES,
        revealed: false,
        message: '',
        loading: false
      };
    case 'GUESS':
      if (action.payload === state.pokemon.name) {
        return { ...state, message: 'You won!', revealed: true };
      } else {
        const newLives = state.lives - 1;
        return newLives === 0
          ? { ...state, message: `You lost! The answer was ${state.pokemon.name}`, revealed: true, lives: 0 }
          : { ...state, lives: newLives, message: 'Try again!' };
      }
    case 'LOADING':
      return { ...state, loading: true };
    default:
      return state;
    }
}

async function fetchRandomPokemonData() {
    const randomId = Math.floor(Math.random() * 151) + 1;
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
    const data = await res.json();

    const name = data.name;
    const image = data.sprites.other['official-artwork'].front_default;

    const ids = new Set([randomId]);
    while (ids.size < TOTAL_OPTIONS) {
        ids.add(Math.floor(Math.random() * 151) + 1);
    }

    const names = await Promise.all(
        [...ids].map(async (id) => {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            const d = await res.json();
            return d.name;
        })
    );

    const uniqueNames = Array.from(new Set(names));
    if (!uniqueNames.includes(name)) uniqueNames[0] = name;

    return { name, image, options: shuffleArray(uniqueNames)};
}

function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

export default function PokemonGuessGame() {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        loadNewGame();
    }, []);

    const loadNewGame = async () => {
        dispatch({ type: 'LOADINGS' });
        const { name, image, options } = await fetchRandomPokemonData();
        dispatch({ type: 'SET_POKEMON', payload: { pokemon: { name, image }, options } });
    };

    const handleGuess = (name) => {
        if (state.revealed) return;
        dispatch({ type: 'GUESS', payload: name });
    };

    return (
        <div className={styles.wrapper}>
            {state.loading ? (
              <Text type="title">Loading...</Text>
            ) : (
              <>
                <ImageGame src={state.pokemon.image} alt="Who's that Pokémon?" revealed={state.revealed} />
                <GameOptions options={state.options} onSelect={handleGuess} />
                <Text type="subtitle">{state.message}</Text>
                {state.revealed && (
                  <button className={styles.retry} onClick={loadNewGame}>Play Again</button>
                )}
              </>
            )}
        </div>
    )
}