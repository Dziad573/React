
export function LikesCounter({numberOfLikes, onLikeButtonClick, onLikePlusButtonClick}){

    return(
        <>
            <h2>Polubienia: {numberOfLikes}</h2>
            <button onClick={onLikeButtonClick}>Lubię to</button>
            <button onClick={onLikePlusButtonClick}>Lubię to++</button>
        </>
    )
    
}