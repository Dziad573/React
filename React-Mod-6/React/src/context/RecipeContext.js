import { createContext } from "react";
import { recipes } from "../data/recipes";

export const RecipeContext = createContext(recipes[0]);