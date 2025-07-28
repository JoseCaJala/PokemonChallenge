import styles from './ImageGame.module.css'

export default function ImageGame({ src, alt, revealed = false}) {
    return (
        <div className={styles.wrapper}>
            <img 
                src={src} 
                alt={alt} 
                className={`${styles.image} ${revealed ? styles.revealed : styles.hidden}`}
            />
            {!revealed && <span className={styles.question}>?</span>}
        </div>
    );
}