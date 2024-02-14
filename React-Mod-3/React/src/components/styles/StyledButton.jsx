import styled from "styled-components";

const WIDTH = 100;

export const StyledButton = styled.button`
background: transparent;
border: solid 1px;
padding: 12px;
border-radius: 5px;
cursor: pointer;
width: ${WIDTH}px;
color: ${({$primary}) => $primary ? "salmon" : "white"};
margin: ${({$margin}) => $margin + "px"};
transition:
    background 0.3s,
    color 0.3s;

    &:hover {
        color: ${({$primary}) => $primary ? "white" : "salmon"};
        background: ${({$primary}) => $primary ? "salmon" : "white"};
    }
`;