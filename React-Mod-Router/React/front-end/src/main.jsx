import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "./App";
import NotesList from "./components/notes-list/NotesList";
import { Note } from "./components/note/Note";

const router = createBrowserRouter([
    {
        element: <App />,
        path: "/",
        loader: () => {
            return fetch("http://localhost:3000/folders");
        },
        children: [
            {
                path: "notes/:folderId",
                element: <NotesList />,
                loader: ({ params }) => {
                    return fetch(
                        `http://localhost:3000/notes?folderId=${params.folderId}`
                    );
                },
                children: [
                    {
                        path: `note/:noteId`,
                        element: <Note />,
                        loader: ({ params }) => {
                            return fetch(
                                `http://localhost:3000/notes/${params.noteId}`
                            );
                        },
                    },
                ],
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
