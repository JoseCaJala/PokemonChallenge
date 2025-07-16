import Input from "../atoms/Input";
import SearchButton from "../atoms/SearchButton";
import Text from "../atoms/Text";
import styles from "./SearchSection.module.css";

export default function SearchSection({ onSearch, onInputChange, value  }){
    return(
        <div className={styles.searchSection}>
        <div className={styles.searchContainer}>
          <Input 
            type="text" 
            placeholder="What Pokémon are you looking for?"
            onChange={onInputChange}
            value= {value}
          />
          <SearchButton onClick={onSearch}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <path d="M21 21l-4.35-4.35"/>
            </svg>
          </SearchButton>
        </div>
        <Text type="body" className={styles.searchText}>
          Search for Pokémon by name or using the National Pokédex number.
        </Text>
      </div>
    )
}