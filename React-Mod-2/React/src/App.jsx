//import { useState } from "react";
import { LikesCounter } from "./components/LikesCounter";
import { Plot } from "./components/Plot";
import { Form } from "./components/Form";

function App() {

  return (
    <>
      <h1>Pitbul. Nowe porządki</h1>
      <h2>Rok produkcji: 2016</h2>
      <LikesCounter/>
      <Plot/>
      <Form/>
      
    </>
  )
}

export default App
