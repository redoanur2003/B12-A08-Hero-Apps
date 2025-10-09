import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../../Component/Root/Root';
import Home from '../../Component/Home/Home';
import App from '../../Component/Apps/App';
import Installation from '../../Component/Installations/Installation';
import Error from '../../Component/ErrorPage/Error';


export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        errorElement: <Error></Error>,
        children: [
            { index: true, path: '/', Component: Home },
            { path: 'app', Component: App },
            { path: 'installation', Component: Installation }
        ]
    }
])
// createBrowserRouter