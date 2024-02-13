import { useState } from "react";

export function Form({ setReviews }) {

    const [inputValue, setInputValue] = useState("");
    const [textareaValue, setTextareaValue] = useState("");



    function handleSubmit(event) {
        event.preventDefault();

        const newReview = {
            author: inputValue,
            text: textareaValue,
        };

        setReviews((prevReviews) => [ newReview, ...prevReviews ]);

        setInputValue("");
        setTextareaValue("");
    }

    return (
        <>
            <hr />
            <h2>Dodaj komentarz</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <div>
                        <label htmlFor="author">Nazwa</label>
                    </div>
                    <input
                        type="text"
                        name="author"
                        id="author"
                        value={inputValue}
                        onChange={(event) => setInputValue(event.target.value)}
                    />
                </div>
                <div>
                    <div>
                        <label htmlFor="text">Komentarz</label>
                    </div>
                    <textarea
                        name="text"
                        id="text"
                        value={textareaValue}
                        onChange={(event) => setTextareaValue(event.target.value)}
                    />
                </div>
                <button type="submit">Dodaj</button>
            </form>
        </>
    );
}