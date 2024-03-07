import { useState } from "react";
import { Button } from "../Button/Button";
import styles from "./TopBar.module.css";
import { useContext } from "react";
import { isLoggedInStateContext } from "../../context/isLoggedInStateContext";

export function TopBar() {

    const [isLoggedIn, setIsLoggedIn] = useContext(isLoggedInStateContext);

    return (
        <div className={styles.wrapper}>
            <span className={styles.title}>Reactowe przepisy</span>
            {isLoggedIn ? (
                <>
                    <span>Zalogowany</span>
                    <Button onClick={() => setIsLoggedIn(false)}>
                        Wyloguj
                    </Button>
                </>
            ) : (
                <Button onClick={() => setIsLoggedIn(true)}>Zaloguj</Button>
            )}
        </div>
    );
}
