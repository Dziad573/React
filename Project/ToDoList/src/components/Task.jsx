import { useState } from "react";

export function Task({ id, text, onDelete}){
    const [deleted, setDelete] = useState(false);
    
    const [done, setDone] = useState(false)
    function handleDoneClick(){
        setDone((wasDone) => !wasDone);
    }
    
        return (
            <>

                {deleted ? (
                    ""
                ) : (
                    <article className="w-100% relative border-b-[1px] min-h-7 border-b-blue-800">
                        <span className={`absolute left-0 ${done ? "line-through decoration-red-600" : ""}`}>
                            {id + " "}
                            {text}
                        </span>
                        {<button className="ml-2 px-1 right-11 absolute border border-lime-300"
                        onClick={handleDoneClick}>
                            {!done ? ("Nie zrobione") : ("Zrobione")}
                        </button>
                        }
                        
                        
                        <button className="ml-2 right-1 absolute border border-lime-300" onClick={() => {
                            setDelete((prev) => !prev); 
                            onDelete();
                        }}>
                            usuń
                        </button>
                    </article>
                    )
                }
        
            </>
            
        );
    
}