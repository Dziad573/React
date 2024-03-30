import styles from "./Loader.module.css";

export function Loader() {
    return (
        <div className={styles.loader}>
            <div className={styles["lds-ring"]}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}
