import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Home/app';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Auth0Provider
            domain="dev-xrum4bpzggdoilx1.us.auth0.com"
            clientId="kbQDo3GsyJNcZAdXgS8ZYwtudm6qxxlX"
            authorizationParams={ {
                redirect_uri: window.location.origin
            } }
        >
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Auth0Provider>
    </React.StrictMode>
);
