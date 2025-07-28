import Header from "../molecules/Header";
import Footer from "../molecules/Footer";
import styles from "./Layout.module.css";
import SearchSection from "../molecules/SearchSection";
import LanguageSelector from "../molecules/LanguageSelector";
import { useLocation } from "react-router-dom";
import { useSearch } from "../contexts/SearchContext";

export default function Layout({ children }) {
  const location = useLocation();
  const { handleSearch, handleInputChange, searchTerm } = useSearch();

  let bottomContent = null;

  if (location.pathname === "/") {
    bottomContent = (
      <LanguageSelector />
    );
  } else if (location.pathname === "/pokemons") {
    bottomContent = <SearchSection
        onSearch={handleSearch}
        onInputChange={handleInputChange}
        value={searchTerm}
      />;
  }

  return (
    <div className={styles.layout}>
      <Header bottomContent={bottomContent}/>
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}