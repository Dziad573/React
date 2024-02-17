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

  const initialTasks = [];
  const [tasks, setTasks] = useState(initialTasks);

  return (

    <>

      <div id="container" className='text-center w-[400px] h-[560px] rounded-3xl bg-slate-500 text-lime-300'>
        <div className='w-[100%] flex'>

          <div className={`flex flex-col text-center p-3 w-[300px] h-[150px] justify-content-center ${inputShown ? "w-[600px]" : ""}`}>
            <span className='text-4xl text-wrap'>Do zrobienia
            </span>
            {inputShown ? (
              <>
                <div className="flex flex-row mt-3">
                  <AddTaskInput setTasks={setTasks}/>
                  
                </div>
                <Tasks tasks={tasks}/>
              </>
            
            ) : (
              /*<TasksCounter/>+*/" Liczba zadań"
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
      </div>
      
        
    </>
  )
}

export default App
