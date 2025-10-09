import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../../Component/Root/Root';
import Home from '../../Component/Home/Home';
import App from '../../Component/Apps/App';
import Installation from '../../Component/Installations/Installation';
import Error from '../../Component/ErrorPage/Error';
import SingleApp from '../../Component/SingleApp/SingleApp';


export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        errorElement: <Error></Error>,
        children: [
            {
                index: true, path: '/', Component: Home,
                loader: () => fetch('homeApps.json')
            },
            {
                path: '/app', Component: App,
                loader: () => fetch('allApps.json')
            },
            {
                path: '/app/:appId',
                loader: () => fetch('allApps.json'),
                Component: SingleApp
            },
            { path: 'installation', Component: Installation }
        ]
    }
])
