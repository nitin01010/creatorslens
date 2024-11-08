import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Home/app';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';

const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Auth0Provider
            domain={ domain }
            clientId={ clientId }
            authorizationParams={ {
                redirect_uri: window.location.origin,
            } }
        >
            <BrowserRouter>
                <App />
                <ToastContainer />
            </BrowserRouter>
        </Auth0Provider>
    </React.StrictMode>
);
