import { useState } from "react";

export function Form(){
    const [review, setReview] = useState(null)
    const [inputValue, setInputValue] = useState("");
    const [textareaValue, setTextareaValue] = useState("");

    function handleSubmit(event){
        event.preventDefault();

        const author = inputValue;
        const text = textareaValue;

        setReview({ author, text });
    }
        return(
            <>
                <h2>Dodaj komentarz</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <div>
                            <label htmlFor="author">Nazwa</label>
                        </div>
                        <input type="text" name="author" id="author" onChange={(event) => {
                            setInputValue(event.target.value)
                        }}/>
                    </div>
                    <div>
                        <div>
                            <label htmlFor="text">Komentarz</label>
                        </div>
                            <textarea name="text" id="text" onChange={(event) => {
                                setTextareaValue(event.target.value)
                            }}>

                            </textarea>
                    </div>
                    <button
                        type="submit" 
                        disabled={inputValue === "" || textareaValue === ""}
                    >
                        Dodaj
                    </button>
                    
                    
                </form>

                {review &&
                    <article>
                        <strong>{review.author}</strong>
                        <br></br>
                        {review.text}
                    </article>
                }
            </>
        )
}