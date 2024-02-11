export function Review({ author, text }){
    return (
        <>
            <article>
                <strong>{author}</strong>
                <p>{text}</p>
            </article>
        </>
        
    );
}