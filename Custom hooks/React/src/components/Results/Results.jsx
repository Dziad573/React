import { useGetData } from "../../hooks/useGetData";
import styles from "./Results.module.css";

export function Results() {
    const { data: results, error } = useGetData("/results.json");



    return (
        <section className={styles.section}>
            {error ? (
                error.message
            ) : (
                <ul className={styles.list}>
                    {results.map((result) => (
                        <li key={result.name} className={styles.item}>
                            <strong>{result.name}</strong>
                            <span> - {result.score}</span>
                            <div className={styles.progressContainer}>
                                <div
                                    className={styles.progress}
                                    style={{ width: `${result.score}%` }}
                                ></div>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}
