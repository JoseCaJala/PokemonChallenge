import Layout from "./components/template/Layout";
import PokemonList from "./components/organisms/PokemonList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<PokemonList />} />
        {/* <Route path="/" element={<whoIsPokemon />} />
        <Route path="/" element={<PokemonInfo />} /> */}
      </Routes>
    </Layout>
    </BrowserRouter>
  );
}

export default App;
