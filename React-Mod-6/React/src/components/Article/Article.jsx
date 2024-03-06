import { Recipe } from "../Recipe/Recipe";
import { Button } from "../Button/Button";

export function Article({recipe}) {
    return (
        <article>
            <Recipe recipe={recipe}/>
            <Button onClick={() => alert("Przepis polubiony!")}>
                Lubię to!
            </Button>
        </article>
    );
}
