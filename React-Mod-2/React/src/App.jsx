import { useState } from "react";
import { LikesCounter } from "./components/LikesCounter";
import { Plot } from "./components/Plot";
import { Form } from "./components/Form";
import { Reviews } from "./components/Reviews";

const initialReviews = [
  { author: "Krzysztof", text: "Spoko ok", id: 1 },
  { author: "Bartek", text: "Gut Gut", id: 2 },
];

function App() {
  const [reviews, setReviews] = useState(initialReviews);
  const [counterShown, setCounterShown] = useState(true);
  const [numberOfLikes, setNumberOfLikes] = useState(50);

  function handleLikeButtonClick() {
      setNumberOfLikes((previousNumberOfLikes) => previousNumberOfLikes + 1);
  }

  function handleLikePlusButtonClick() {
      setNumberOfLikes((previousNumberOfLikes) => previousNumberOfLikes + 3);
  }
  return (
    <>
      <h1>Pitbul. Nowe porządki</h1>
      <h2>Rok produkcji: 2016</h2>
      <button 
        onClick={() => {
          setCounterShown((prevCounterShown) => !prevCounterShown);
        }}
      >
        {counterShown ? "Ukryj licznik" : "Pokaż licznik"}
      </button>
      {counterShown && (
        <LikesCounter 
          numberOfLikes = {numberOfLikes}
          onLikeButtonClick = {handleLikeButtonClick}
          onLikePlusButtonClick = {handleLikePlusButtonClick}
        />
      )}
      <Plot/>
      <Reviews reviews={reviews}/> 
      <Form setReviews={setReviews}/>
        
      
    </>
  );
}

export default App;
