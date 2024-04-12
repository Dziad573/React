import styles from "./FoldersList.module.css";
import { Folder } from "../folder/Folder";
import { Title } from "../title/Title";
import { TopBar } from "../top-bar/TopBar";
import { AddNewButton } from "../add-new-button/AddNewButton";
import { NavLink, useLoaderData, Form } from "react-router-dom";

const Folders = ({ children }) => (
    <div className={styles["folders-column"]}>{children}</div>
);
const UserCreatedFolders = ({ children }) => (
    <div role="list" className={styles["folders-list"]}>
        {children}
    </div>
);

export async function createFolder(args){
    const data = await args.request.formData();
    const folderName = data.get("folder-name");
    return fetch("http://localhost:3000/folders", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: folderName,
        }),
    });

}

const FoldersList = () => {
    const folders = useLoaderData();

    return (
        <Folders>
            <TopBar>
                <Form method="POST" action="/">
                    <input
                        className={styles["new-folder-input"]}
                        type="text"
                        placeholder="Nazwa folderu"
                        name="folder-name"
                    />
                    <AddNewButton type="submit">+</AddNewButton>
                </Form>
            </TopBar>

            <Title>Foldery</Title>
            <UserCreatedFolders>
                {folders.map((folder) => (
                    <NavLink key={folder.id} to={`/notes/${folder.id}`}>
                        {({ isActive }) => {
                            return (
                                <Folder active={isActive}>{folder.name}</Folder>
                            );
                        }}
                    </NavLink>
                ))}
            </UserCreatedFolders>
        </Folders>
    );
};

export default FoldersList;
