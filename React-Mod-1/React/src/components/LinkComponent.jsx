export function LinkComponent(props) {
    
    const { text, shouldOpenNewTab } = props;

    const address = "https://zrozumiecreact.pl";
    const target = shouldOpenNewTab ? "_blank" : "";
    const rel = shouldOpenNewTab ? "noopener noreferrer" : "";
    if(text === undefined){
        props.text = address;
    }
    return (
        <a href={address} target={target} rel={rel}>
            {text}
        </a>
    );

}