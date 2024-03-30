import "./Modal.css";

export function Modal({ onClose }) {
    return (
        <div className="modal">
            <span>Sukces! 🎉</span>
            <button onClick={onClose}>Zamknij</button>
        </div>
    );
}
