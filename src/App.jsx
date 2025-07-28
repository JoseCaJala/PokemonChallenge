import Layout from "./components/template/Layout";
import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SearchProvider } from "./components/contexts/SearchContext";
import WhoisThatPokemon from "./pages/WhoisThatPokemon";
import DetailPokemon from "./pages/DetailPokemon";

const PokemonList = lazy(() => import("./components/organisms/PokemonList"));

function App() {
  return (
    <BrowserRouter>
    <SearchProvider>
      <Layout>
        <Suspense fallback={<p style={{ textAlign: "center "}}>Loading your pokemons...</p>}>
          <Routes>
            <Route path="/" element={<WhoisThatPokemon />} />
            <Route path="/pokemons" element={<PokemonList />} />
            <Route path="/pokemon/:id" element={<DetailPokemon />} />
          </Routes>
        </Suspense>
      </Layout>
    </SearchProvider>
    </BrowserRouter>
  );
}

export default App;
