import {useState} from "react";

export function LikesCounter(){
    const [numberOfLikes, setNumberOfLikes] = useState(50);

    function handleLikeButtonClick() {
        setNumberOfLikes((previousNumberOfLikes) => previousNumberOfLikes + 1);
    }

    function handleLikePlusButtonClick() {
        setNumberOfLikes((previousNumberOfLikes) => previousNumberOfLikes + 3);
    }

    return(
        <>
            <h2>Polubienia: {numberOfLikes}</h2>
            <button onClick={handleLikeButtonClick}>Lubię to</button>
            <button onClick={handleLikePlusButtonClick}>Lubię to++</button>
        </>
    )
    
}