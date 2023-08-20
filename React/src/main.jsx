//import React from 'react';
import ReactDOM from 'react-dom/client';

/*const elementInJSX = <a href="https://zrozumiecreact.pl">Test 2</a>;
const currentDate = new Date();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
console.log(hours, minutes);
const timer = (
  <div>
    {hours}:{minutes}
  </div>
);

ReactDOM.createRoot(document.getElementById('root')).render(timer);*/

const numberContent = "99";
function getRandomNumber(){
  return Math.round(Math.random()*100);
}
const randomNumber = getRandomNumber();

const element = (
  <div>
    {`Number: ${numberContent}`}, {`Number: ${randomNumber}`}
  </div>
);

ReactDOM.createRoot(document.getElementById('root')).render(element);
