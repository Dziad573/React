import { useState } from "react";
import { Review } from "./Review";

const initialReviews = [
    { author: "Krzysztof", text: "Spoko ok", id: 1 },
    { author: "Bartek", text: "Gut Gut", id: 2 },
];

export function Form() {
    const [reviews, setReviews] = useState(initialReviews);
    const [inputValue, setInputValue] = useState("");
    const [textareaValue, setTextareaValue] = useState("");

    const reviewsElement = reviews.map((r) => (
        <Review key={r.id} author={r.author} text={r.text} />
    ));

    function handleSubmit(event) {
        event.preventDefault();

        const newReview = {
            author: inputValue,
            text: textareaValue,
            id: reviews.length + 1,
        };

        setReviews([newReview, ...reviews]);
        setInputValue("");
        setTextareaValue("");
    }

    return (
        <>
            <hr />
            <ul>{reviewsElement}</ul>
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