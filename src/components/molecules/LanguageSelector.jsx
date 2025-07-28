// src/components/molecules/LanguageSelector.jsx
import styles from "./LanguageSelector.module.css";
import Flag from "../atoms/Flag";
import Text from "../atoms/Text";

export default function LanguageSelector({ onSelectLanguage, activeLanguage }) {
  const languages = [
    { country: 'spain', alt: 'Spanish' },
    { country: 'japan', alt: 'Japanese' },
    { country: 'english', alt: 'English' },
  ];
  
  return (
    <div className={styles.languageSelector}>
      <Text type="subtitle" className={styles.text}>
        Select a Language
      </Text>
      <div className={styles.flagsContainer}>
        {languages.map(({ country, alt })=>(
          <Flag
            key={country}
            country={country}
            alt={alt}
            isActive={activeLanguage === country}
            onClick={() => onSelectLanguage(country)}
            className={styles.flag}
          />
        ))}
      </div>
    </div>
  );
}
