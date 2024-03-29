import { useState } from "react";
import { Task } from "./Task";

export function Tasks({ tasks, setTasks, setIdValue}) {
    // const handleDeleteTask = (id) => {
    //     setTasks((prevTasks) => {
    //         const updatedTasks = prevTasks.filter((task) => task.id !== id);
    //         return updatedTasks.map((task, index) => ({
    //             ...task,
    //             id: index + 1,
    //         }));
    //     });
    // };

    const tasksElement = tasks.map(({id, text}) => (
        <Task 
        key={id} 
        id={id} 
        text={text}
        onDelete={() => {
            alert("aa");
            setIdValue((prevTasks) => 
            prevTasks.filter((task) => task.id !== id));
            setTasks((prevTasks) => 
            prevTasks.filter((task) => task.id !== id));
        }}
        />
        ));
        
    const tasksCouter = `${tasksElement.length}`;
        
    return(
        <>
            {tasksCouter > 0 ? (
                <ul className="flex flex-col gap-[32px] p-3 m-2">{tasksElement}</ul>
            ) : (
                <p className="p-3 m-2">Brak zadań do wyświetlenia</p>
            )}
    
            {tasksCouter >= 7 ? (
                "Osiągnięto maksymalną liczbę zadań"
            ) : (
                ""
            )}
            {tasksCouter}
        </>
    )
}