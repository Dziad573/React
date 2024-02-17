import { useState } from "react";
import { AddTaskInput } from './AddTaskInput';

export function AddTaskButton(){

    function handleAddTaskButtonClick(){
        alert("Dodaj zadanie: " + AddTaskInput.taskInputValue);
    }
    return(
        <>
            <button className="px-[12px]"  onClick={() => handleAddTaskButtonClick(AddTaskInput.taskInputValue)}> 
                Dodaj 
            </button>
        </>
    )
}