import { Recipe } from "../Recipe/Recipe";
import { Button } from "../Button/Button";
import { useContext } from "react";
import { isLoggedInStateContext } from "../../context/isLoggedInStateContext";

export function Article() {
    const [isLoggedIn, setIsLoggedIn] = useContext(isLoggedInStateContext);

    return (
        <article>
            <Recipe/>

            {isLoggedIn ? (
                <Button onClick={() => alert("Przepis polubiony!")}>
                    Lubię to!
                </Button>
                ) : (
                    <>
                        <div>Zaloguj się, by polubić przepis: </div>
                        <Button onClick={() => setIsLoggedIn(true)}>Zaloguj się!</Button> 
                    </>
                )}

        </article>
    );
}
