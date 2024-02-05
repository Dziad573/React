import { useState } from "react";

const initialReviews = [
    { author: "Bartek", text: "Spoko film", id: 1 },
    { author: "Krzyś", text: "poko loko", id: 2 },
];

export function Form(){

    const [reviews, setReviews] = useState(initialReviews);
    const [inputValue, setInputValue] = useState("");
    const [textareaValue, setTextareaValue] = useState("");

    const reviewsElement = reviews.map((r) => (
        <article key={r.id}>
            <strong>{r.author}</strong>
            <p>{r.text}</p>
        </article>
    ))
    
    function handleSubmit(event){
        event.preventDefault();

        const author = inputValue;
        const text = textareaValue;

        const newReview = {author, text};
        setReviews((prevReviews) => {
            prevReviews.push(newReview);
            return [...prevReviews, newReview];
        });
    }
        return(
            <>
                <hr />
                <ul>{reviewsElement}</ul>
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

            </>
        )
}