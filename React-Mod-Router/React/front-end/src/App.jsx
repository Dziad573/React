import { Outlet } from "react-router-dom";
import FoldersList from "./components/folders-list/FoldersList";
import Layout from "./components/layout/Layout";

export function App() {
    return (
        <Layout>
            <FoldersList />
            <Outlet />
        </Layout>
    );
}
