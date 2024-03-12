import { useGetData } from "../../hooks/useGetData";
import styles from "./Stocks.module.css";

export function Stocks() {
    const {data: stocks, error} = useGetData("/stocks.json");

    return (
        <section className={styles.section}>
            {error ? (
                <span className={styles.error}>{error.message}</span>
            ) : (
                <ul className={styles.list}>
                    {stocks.map((stock) => (
                        <li key={stock.company_name} className={styles.item}>
                            <div className={styles.wrapper}>
                                <span className={styles.logo}>
                                    {stock.company_name[0]}
                                </span>
                                <strong className={styles.fullName}>
                                    {stock.stock_short_name}
                                </strong>
                                <span className={styles.shortName}>
                                    {stock.company_name}
                                </span>
                                <span className={styles.price}>
                                    Price: {stock.market_price}
                                </span>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}
