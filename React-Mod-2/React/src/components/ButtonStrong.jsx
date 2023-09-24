export function ButtonStrong({ children, klik }) {
    return (
        <button onClick={klik}>
            <strong>{children}</strong>
        </button>
    );
}