import { useState } from "react";

export function Task({ id, text }){
    const [deleted, setDelete] = useState(false);
    
        return (
            <>

                {deleted ? (
                    ""
                ) : (
                    <article className="w-100% relative border-b-[1px] border-b-blue-800">
                        <strong>
                            {id + " "}
                            {text}
                        </strong>
                        <button className="ml-2 right-1 absolute" onClick={() => {
                            setDelete((prev) => !prev);
                        }}>
                            usuń
                        </button>
                    </article>
                    )
                }
        
            </>
            
        );
    
}