import Layout from "./components/template/Layout";
import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SearchProvider } from "./components/contexts/SearchContext";

const PokemonList = lazy(() => import("./components/organisms/PokemonList"));

function App() {
  return (
    <BrowserRouter>
    <SearchProvider>
      <Layout>
        <Suspense fallback={<p style={{ textAlign: "center "}}>Loading your pokemons...</p>}>
          <Routes>
            <Route path="/" element={<PokemonList />} />
            {/* <Route path="/" element={<whoIsPokemon />} />
            <Route path="/" element={<PokemonInfo />} /> */}
          </Routes>
        </Suspense>
      </Layout>
    </SearchProvider>
    </BrowserRouter>
  );
}

export default App;
