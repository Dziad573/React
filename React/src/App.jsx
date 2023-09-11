import { PersonInfo } from "./components/PersonInfo";
function App() {
  const jan = {
    name: "Andrzej",
    lastName: "Kowalski",
    mail: "a.kowalski@gmail.com",
    tel: "+48 999 888 000"
  }
  const janina = {
    name: "Janina",
    lastName: "Kowalska",
    mail: "j.kowalska@gmail.com",
    tel: "+48 329 555 141"
  }
  const karol = {
    name: "Karol",
    lastName: "Kowalski",
    mail: "k.kowalski@gmail.com"
  }
  return (
    <>
      <PersonInfo person={jan}></PersonInfo>
      <br />
      <PersonInfo person={janina}></PersonInfo>
      <br />
      <PersonInfo person={karol}></PersonInfo>
    </>
  );
}

export default App;
