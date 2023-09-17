import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";

import store from './redux-toolkit'

const root = createRoot(document.getElementById("root"));
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: 'deleted',
                element: <h1>Deleted</h1>
            }, {
                path: 'last-edited',
                element: <h1>Edited Page</h1>
            }, {
                path: 'completed',
                element: <h1>Completed</h1>
            }, {
                path: 'profile',
                element: <h1>Profile page</h1>
            }
        ]
    }

])
root.render(

    <Provider store={store}>
        <RouterProvider router={router}>
            <App />
        </RouterProvider>
    </Provider>


)