import { useState } from 'react';
import './App.css';

function App() {
  const [isPasswordElementShown, setIsPasswordElementShown] = useState(false);
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(12);
  const [isSpecChecked, setIsSpecChecked] = useState(false);
  const [isPolishChecked, setIsPolishChecked] = useState(false);
  const [isNumChecked, setIsNumChecked] = useState(false);
  const [isBigChecked, setIsBigChecked] = useState(false);
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  
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

  const random = () => {
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
    for (let i = 0; i < length; i++){
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }
      return result;
  }
  function handleIsPasswordElementShown() {
    setIsPasswordElementShown(true);
    const generatedPassword = random();
    setPassword(generatedPassword);
  }

  function handleShowPassword(){
    setIsPasswordShown((isShown) => !isShown);
  }

  function handleCopyPassword(){
    navigator.clipboard.writeText(password)
      .then(() => {
        console.log('Tekst został skopiowany!');
      })
      .catch((error) => {
        console.error('Błąd podczas kopiowania tekstu:', error);
      });
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
            {
              isPasswordShown ? (
                <div data={password}>{password}</div>
              ) : (
                <div data={'*'.repeat(length)}>{'*'.repeat(length)}</div>
              )
            }
            <button type='button' onClick={handleShowPassword}>
              {isPasswordShown ? "Ukryj" : "Pokaż"}
            </button>
            <button type='button' onClick={() => {handleCopyPassword()}}>Kopiuj</button>
          </>
        ) : null}
      </form>
    </div>
  );
}

export default App;
