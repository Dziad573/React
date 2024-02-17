import { useState } from "react";

export function AddTaskInput({ inputShown, setTasks }){
    
    const [taskInputValue, setTaskInputValue] = useState('');
    const [idValue, setIdValue] = useState(1);
    
    function handleTaskInputChange(e){
        e.preventDefault();
        setTaskInputValue(e.target.value);
    }

    function handleAddTaskButtonClick(taskInputValue){
        const newTask = {
            id: idValue,
            text: taskInputValue,
        };
        if(newTask.id == 8){
            return;
        }
        setTasks((prevTasks) => [...prevTasks, newTask]);
        setTaskInputValue("");
        setIdValue((prevId) => prevId + 1);
    }
    
    return(
        <>
            <input type="text" className={`m-1 p-2 w-[300px] text-wrap border-[3px] border-black bg-slate-500 text-lime-300 rounded-2xl ${inputShown ? "w-[80%]" : ""}`}
                onChange={handleTaskInputChange}
            />

            <button className="px-[12px]"  onClick={() => handleAddTaskButtonClick(taskInputValue)}> 
                Dodaj 
            </button>

            {/* <ul className="flex flex-col gap-[32px] p-7">
                {tab.map((taba) => (
                    <>
                        <li key={taba}>
                            {taba}
                        </li>
                    </>
                    
                    ))} 
                    
            </ul>*/}
        </>
    )
}