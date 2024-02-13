import { Review } from "./Review";

export function Reviews({ reviews }){

    const reviewsElement = reviews.map((r) => (
        <Review key={r.id} author={r.author} text={r.text} />
    ));
    return(
        <>
            <ul>{reviewsElement}</ul>
        </>
    )
}