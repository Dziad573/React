import { ButtonStrong } from "./components/ButtonStrong";
function App() {
  const buttonEl = (
    <button 
      onClick={() => {
        alert("Klik!");
      }}
      onMouseEnter={() => {
        console.log("on mouse enter");
      }}
    >
      Pokaż spoiler
    </button>
  );
  
  return (
    <>
      <h1>Pitbul. Nowe porządki</h1>
      <h2>Rok produkcji: 2016</h2>
      <h2>Fabuła</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam obcaecati ut deserunt praesentium quisquam. Earum, expedita nisi minus error mollitia harum quod?
        Cum totam labore quod veniam mollitia fugiat facere consequatur tenetur vitae odit corporis maxime, et ipsam soluta iste qui perspiciatis culpa, omnis eligendi nihil.
      </p>
      {buttonEl}
      <ButtonStrong klik={() => alert("Gruby alert")}>Pogrubiony alert!</ButtonStrong>
      <p>
        Perspiciatis modi iusto fugiat optio quibusdam at assumenda, repellendus dolorum culpa pariatur amet, itaque iste dolore eos, reprehenderit eaque vel sunt nostrum.
        Quod, ut recusandae commodi minima, officia rerum cupiditate laudantium unde quae fuga suscipit quis, et facilis porro cum qui quam sequi earum.
      </p>
    </>
  )
}

export default App
