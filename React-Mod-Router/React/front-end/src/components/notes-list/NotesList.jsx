import styles from "./NotesList.module.css";
import { Title } from "../title/Title";
import { AddNewButton } from "../add-new-button/AddNewButton";
import { TopBar } from "../top-bar/TopBar";
import { ShortNote } from "../short-note/ShortNote";

import { useParams } from "react-router-dom";

const NotesContainer = ({ children }) => (
    <div className={styles["notes-container"]}>{children}</div>
);

const Notes = ({ children }) => (
    <div className={styles["notes-list"]} role="list">
        {children}
    </div>
);

const NotesList = () => {
    const notes = [];

    const { folderId } = useParams();

    return (
        <NotesContainer>
            <Notes>
                <TopBar>
                    <Title>Notatki</Title>

                    <AddNewButton>+</AddNewButton>
                </TopBar>

                {notes
                    .filter((note) => note.folderId === Number(folderId))
                    .map((note, idx) => (
                        <ShortNote
                            role="listitem"
                            key={idx}
                            note={note}
                        ></ShortNote>
                    ))}
            </Notes>
        </NotesContainer>
    );
};

export default NotesList;
