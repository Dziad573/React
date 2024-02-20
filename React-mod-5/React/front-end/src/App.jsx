import { useState } from "react";
import styles from "./App.module.css";
import { Panel } from "./components/Panel/Panel";
import { Button } from "./components/Button/Button";

function App() {
    const [isPanelShown, setIsPanelShown] = useState(true);


    return (
        <main className={styles.main}>
            <Button 
                onClick={() => {setIsPanelShown((prevIsPanelShown) => !prevIsPanelShown)}}>
                {isPanelShown ? "Schowaj panel" : "Pokaż panel"}
            </Button>
            {isPanelShown && <Panel></Panel>}
        </main>
    );
}

export default App;
