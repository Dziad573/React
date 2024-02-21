import { useState } from 'react';
import './App.css';

function App() {
  const [isPasswordElementShown, setIsPasswordElementShown] = useState(false);
  const [data, setData] = useState('');
  const [length, setLength] = useState(12);
  const [isSpecChecked, setIsSpecChecked] = useState(false);
  const [isPolishChecked, setIsPolishChecked] = useState(false);
  const [isNumChecked, setIsNumChecked] = useState(false);
  const [isBigChecked, setIsBigChecked] = useState(false);
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [password, setPassword] = useState('')
  
  const handleCheckboxSpecChange = (e) => {
    setIsSpecChecked(e.target.checked);
  }
  const handleCheckboxPolishChange = (e) => {
    setIsPolishChecked(e.target.checked);
  }
  const handleCheckboxNumChange = (e) => {
    setIsNumChecked(e.target.checked);
  }
  const handleCheckboxBigChange = (e) => {
    setIsBigChecked(e.target.checked);
  }
  
  const handleChangeLength = (e) => {
    setLength(e.target.value);
  }

  function random(length){
    let characters = 'abcdefghijklmnopqrstuvwxyz';
    if(isSpecChecked){
      characters += '!@#$%^&*()[]{};:,<.>/?';
    }
    if(isPolishChecked){
      characters += 'ąśćżźńęó';
    }
    if(isNumChecked){
      characters += '0123456789';
    }
    if(isBigChecked){
      characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    let result = '';
    for (let i = 0; i<length; i++){
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }
    if(isPasswordShown){
      return result;
    }else{
      const char = '*';
      result = char.repeat(length);
      return result;
    }

  }
  function handleIsPasswordElementShown() {
    const randomNumber = Math.round(Math.random()*100);
    setData(randomNumber.toString());
    setIsPasswordElementShown(true);
    setPassword(random(length));
  }

  function handleShowPassword(){
    setIsPasswordShown((isShown) => !isShown);
  }

  function handleCopyPassword(){
    navigator.clipboard.writeText(password)
      .then(() => {
        alert('Tekst został skopiowany!');
      })
  }

  return (
    <div className='container'>
      <form action=''>
        <div className='passLength'>
          Długość hasła: <input type='number' value={length} placeholder='Wartość domyślna: 12' onChange={handleChangeLength}/>
        </div>
        <input type='checkbox' name='spec' id='' 
          checked={isSpecChecked}
          onChange={handleCheckboxSpecChange}
        />Znaki specjalne <br />
        
        <input type='checkbox' name='pol' id='' 
          checked={isPolishChecked}
          onChange={handleCheckboxPolishChange}
        />Polskie znaki <br />

        <input type='checkbox' name='num' id='' 
          checked={isNumChecked}
          onChange={handleCheckboxNumChange}
        />Numery<br />

        <input type='checkbox' name='big' id='' 
        checked={isBigChecked}
        onChange={handleCheckboxBigChange}
        />Wielkie litery<br />

        <button type='button' onClick={handleIsPasswordElementShown}>
          Generuj hasło
        </button>
        {isPasswordElementShown ? (
          <>
            <br /> Twoje hasło: <br />
            <div data={data}>{random(length)}</div>
            <button type='button' onClick={handleShowPassword}>
              {isPasswordShown ? "Ukryj" : "Pokaż"}
            </button>
            <button type='button' onClick={handleCopyPassword}>Kopiuj</button>
          </>
        ) : null}
      </form>
    </div>
  );
}

export default App;
