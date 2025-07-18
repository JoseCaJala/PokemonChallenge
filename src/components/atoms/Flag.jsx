import styles from './Flag.module.css';

export default function Flag({ 
  country, 
  alt, 
  onClick, 
  isActive = false,
  className = '' 
}) {
  const flagSrc = `/src/assets/flags/${country}.svg`;
  const combinedClassName = `${styles.flag} ${isActive ? styles.active : ''} ${className}`;
  
  return (
    <button 
      className={combinedClassName}
      onClick={onClick}
      aria-label={`Select ${alt} language`}
    >
      <img src={flagSrc} alt={alt} className={styles.flagImage} />
    </button>
  );
}