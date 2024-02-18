import { useState } from 'react';
import './styles.css';
import { AddTaskInput } from './components/AddTaskInput';
import { AddTaskButton } from './components/AddTaskButton';
import { Tasks } from './components/Tasks'

function App() {


  const [inputShown, setInputShown] = useState(false);
  function handleTaskClick(){
      setInputShown((wasShown) => !wasShown);
  }


  const [tasks, setTasks] = useState([]);
  

  const [prevLength, setNumberOfTasks] = useState(tasks.length);
  function handleTaskButtonClick() {
    setNumberOfTasks((previousNumberOfTasks) => previousNumberOfTasks - 1);
    console.log(prevLength);
}
  return (

    <>

      <div id="container" className='text-center w-[460px] h-[580px] rounded-3xl bg-slate-500 text-lime-300'>
        <div className='w-[100%] flex'>

          <div className={`flex flex-col text-center p-3 w-[300px] h-[120px] justify-content-center ${inputShown ? "w-[600px]" : ""}`}>
            <span className='text-4xl text-wrap text-center' onClick={() => {
              handleTaskClick((prevInputShown) => !prevInputShown)}}>Do zrobienia
            </span>
            {inputShown ? (
              <>
                <div className="flex flex-row mt-3 relative">
                  <AddTaskInput setTasks={setTasks}/>
                </div>
                
              </>
            
            ) : (
              <>
                {tasks.length + " Liczba zadań"}
                <button onClick={handleTaskButtonClick}>hh</button>
              </>
              /*<TasksCounter/>+" Liczba zadań"*/
              )}



          </div>

          {inputShown ? "" : 
            <button id="addTaskButton" className="flex flex-col w-[100px] m-[10px] h-[100px] p-[10px] bg-cyan-600 justify-center rounded-[50%]" 
            onClick={() => {
              handleTaskClick((prevInputShown) => !prevInputShown)}}>
              
              <div className='text-[70px] leading-none h-[100%] w-[100%] text-center '>
                +
              </div>

            </button>
          }
          

        </div>
          <Tasks tasks={tasks}/>
      </div>
      
        
    </>
  )
}

export default App
