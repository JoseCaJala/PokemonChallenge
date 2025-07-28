import styles from "./GameOptions.module.css";
import Button from "../atoms/Button";

export default function GameOptions({ options, onSelect }) {
    return (
        <div className={styles.container}>
            {options.map((name) => (
                <Button key={name} onClick={() => onSelect(name)}>
                    {name}
                </Button>
            ))}
        </div>
    );
}