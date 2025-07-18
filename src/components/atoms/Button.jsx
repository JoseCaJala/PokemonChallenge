import styles from './Button.module.css';

export default function Button({ 
  children, 
  variant = 'primary', 
  onClick, 
  disabled = false,
  className = '' 
}) {
  const combinedClassName = `${styles.button} ${styles[variant]} ${className}`;
  
  return (
    <button 
      className={combinedClassName}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}