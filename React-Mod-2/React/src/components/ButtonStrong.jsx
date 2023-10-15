export function ButtonStrong({ children, onClick }) {
    return (
        <button onClick={onClick}>
            <strong>{children}</strong>
        </button>
    );
}