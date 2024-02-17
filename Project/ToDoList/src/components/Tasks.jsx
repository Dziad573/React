import { useState } from "react";
import { Task } from "./Task";

export function Tasks({ tasks, setTasks }) {
    // const handleDeleteTask = (id) => {
    //     setTasks((prevTasks) => {
    //         const updatedTasks = prevTasks.filter((task) => task.id !== id);
    //         return updatedTasks.map((task, index) => ({
    //             ...task,
    //             id: index + 1,
    //         }));
    //     });
    // };


    const tasksElement = tasks.map((task) => (
        <Task 
            key={task.id} 
            id={task.id} 
            text={task.text} 
            // onDelete={handleDeleteTask}
        />
    ));

    return(
        <>
            {tasks.length > 0 ? (
                <ul className="flex flex-col gap-[32px] p-3 m-2">{tasksElement}</ul>
            ) : (
                <p className="p-3 m-2">Brak zadań do wyświetlenia</p>
            )}
    
            {tasks.length >= 7 ? (
                "Osiągnięto maksymalną liczbę zadań"
            ) : (
                ""
            )}
        </>
    )
}