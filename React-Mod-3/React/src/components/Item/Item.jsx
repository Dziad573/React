import { useState } from "react";
import styled from "styled-components";
import { StyledButton } from "../styles/StyledButton";

const StyledEmoji = styled.span`
    display: block;
    margin-bottom: 42px;
    font-size: 32px;
    transition: transform .4s;
    transform: ${({ $zoomed }) => $zoomed ? "scale(2)" : "scale(1)"};
`;

export function Item({ emoji }) {
    const [zoomed, setZoomed] = useState(false);

    return (
        <li className="px-13 rounded-3xl text-center overflow-hidden">
            <span className={`block mb-10 py-8 text-3xl transition-transform ${zoomed ? "scale-[2]" : ""}`}>{emoji}</span>
            <button className={`border my-3 bg-transparent border-solid border-rose-800 p-3 rounded cursor-pointer w-[150px] text-rose-400 transition hover:text-white hover:bg-teal-400`}
                onClick={() => {
                    setZoomed((wasZoomed) => !wasZoomed);
                }}
            >
                {zoomed ? "Oddal" : "Przybliż"}
            </button>
        </li>
    );
}
