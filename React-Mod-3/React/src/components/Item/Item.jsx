import { useState } from "react";
import styled from "styled-components";
import { StyledButton } from "../styles/StyledButton";

const StyledItem = styled.li`
    background: salmon;
    padding: 30px 50px;
    border-radius: 20px;
    text-align: center;
    overflow: hidden;
`;
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
        <StyledItem>
            <StyledEmoji $zoomed={zoomed}>{emoji}</StyledEmoji>
            <StyledButton
                onClick={() => {
                    setZoomed((wasZoomed) => !wasZoomed);
                }}
            >
                {zoomed ? "Oddal" : "Przybliż"}
            </StyledButton>
        </StyledItem>
    );
}
