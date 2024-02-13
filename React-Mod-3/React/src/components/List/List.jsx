import { Item } from "../Item/Item";
import styles from "./List.module.css";

const emojis = ["🚀", "🎶", "🎁", "🎉", "✨"];

export function List() {
    return (
        <ul className={styles.list}>
            {emojis.map((emoji) => (
                <Item key={emoji} emoji={emoji} />
            ))}
        </ul>
    );
}
