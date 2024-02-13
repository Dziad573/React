import { useState } from "react";
import styles from "./Item.module.css";

export function Item({ emoji }) {
    const [zoomed, setZoomed] = useState(false);

    return (
        <li className={styles.item}>
            <span className={`${styles.emoji} ${zoomed ? styles.zoomed : ""}`}>{emoji}</span>
            <button className={styles.btn}
                onClick={() => {
                    setZoomed((wasZoomed) => !wasZoomed);
                }}
            >
                {zoomed ? "Oddal" : "Przybliż"}
            </button>
        </li>
    );
}
