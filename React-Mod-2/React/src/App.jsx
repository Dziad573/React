import { useState } from "react";

function App() {
  const [isSpoilerShown, setIsSpoilerShown] = useState(false);
  const [iswarningShown, setIsWarningShown] = useState(true);

  function handleShowSpoilerClick(){
    setIsSpoilerShown(true);
    setIsWarningShown(false);
  }
  function handleCloseWarningClick(){
    setIsWarningShown(false);
  }
  return (
    <>
      <h1>Pitbul. Nowe porządki</h1>
      <h2>Rok produkcji: 2016</h2>
      <h2>Fabuła</h2>

      {iswarningShown && (
        <p>
          Uwaga! Opis zawieza spoilery!
          <button onClick={handleCloseWarningClick}>X</button>
        </p>
      )}
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Numquam obcaecati ut deserunt praesentium quisquam. 
        Earum, expedita nisi minus error mollitia harum quod?
      </p>

      {isSpoilerShown ?
        <p>
          Perspiciatis modi iusto fugiat optio quibusdam at assumenda, repellendus dolorum culpa pariatur amet, itaque iste dolore eos, reprehenderit eaque vel sunt nostrum.
          Quod, ut recusandae commodi minima, officia rerum cupiditate laudantium unde quae fuga suscipit quis, et facilis porro cum qui quam sequi earum.
        </p> : 
        <button onClick={handleShowSpoilerClick} onMouseEnter={() => {console.log("on mouse enter");}}>
          Pokaż spoiler
        </button>
      }
      
    </>
  )
}

export default App
