import RemoveIcon from "../../assets/remove.svg";
import styles from "./Note.module.css";
import { TopBar } from "../top-bar/TopBar";

const NoteEditor = ({ children }) => (
    <div className={styles["note-editor"]}>{children}</div>
);

const Note = () => {
    return (
        <div className={styles.container}>
            <TopBar>
                <button className={styles.button}>
                    <img className={styles.image} src={RemoveIcon} />
                </button>
            </TopBar>

            <NoteEditor>
                <input type="text" />
                <textarea />
            </NoteEditor>
        </div>
    );
};

export { Note };
