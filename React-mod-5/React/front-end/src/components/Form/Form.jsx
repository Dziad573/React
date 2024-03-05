import { useState, useRef, forwardRef } from "react";
import styles from "./Form.module.css";
import { Button } from "../Button/Button";

const Input = forwardRef(function Input(props, ref){
    return <input ref={ref} type="text" id="word" className={styles.input} />
})

export function Form({ onFormSubmit }) {
    const [translation, setTranslation] = useState("");
    const [category, setCategory] = useState("noun");
    const wordInputRef = useRef(null);

    function handleSubmit(e) {
        e.preventDefault();
        const newItem = {
            word: wordInputRef.current.value,
            translation,
            category,
        };

        onFormSubmit(newItem);
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.row}>
                <div className={styles.cell}>
                    <label htmlFor="word">Słowo</label>
                    <Input
                        ref={wordInputRef}
                        type="text"
                        id="word"
                        className={styles.input}
                    />
                </div>
                <div className={styles.cell}>
                    <label htmlFor="translation">Tłumaczenie</label>
                    <input
                        type="text"
                        id="translation"
                        className={styles.input}
                        value={translation}
                        onChange={(e) => setTranslation(e.target.value)}
                    />
                </div>
            </div>
            <div>Wybierz kategorię:</div>
            <div className={styles.category}>
                <input
                    type="radio"
                    name="category"
                    id="category-noun"
                    checked={category === "noun"}
                    onChange={() => setCategory("noun")}
                />
                <label htmlFor="category-noun">Rzeczownik</label>
            </div>
            <div className={styles.category}>
                <input
                    type="radio"
                    name="category"
                    id="category-verb"
                    checked={category === "verb"}
                    onChange={() => setCategory("verb")}
                />
                <label htmlFor="category-verb">Czasownik</label>
            </div>
            <div>
                <Button>Dodaj</Button>
            </div>
        </form>
    );
}
