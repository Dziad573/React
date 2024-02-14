import { Item } from "../Item/Item";
import styled from "styled-components";
import {StyledButton} from "../styles/StyledButton";

const emojis = ["🚀", "🎶", "🎁", "🎉", "✨"];

const StyledList = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    gap: 30px;
    padding: 30px;
`;

export function List() {
    return (
        <>  
            <StyledButton 
                $primary = {true}
                $margin = {30}
            >
                test
            </StyledButton>

            <StyledList>
                {emojis.map((emoji) => (
                    <Item key={emoji} emoji={emoji} />
                    ))}
            </StyledList>
        </>
    );
}
