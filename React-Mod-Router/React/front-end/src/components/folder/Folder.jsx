import styles from "./Folder.module.css";
import FolderIcon from "../../assets/folder.svg";
import ArchiveIcon from "../../assets/remove.svg";

const Folder = ({ children, active, icon }) => {
    return (
        <div
            className={[styles.folder, active ? styles.active : ""].join(" ")}
            role="listitem"
        >
            <img src={icon === "archive" ? ArchiveIcon : FolderIcon} />
            {children}
        </div>
    );
};

export { Folder };
