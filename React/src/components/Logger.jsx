export function Logger(props){
        
    const date = new Date();
    console.log(
        `Stworzony o ${date.getHours()} : ${date.getMinutes()}`
    );

    return <>{props.children}</>;
}