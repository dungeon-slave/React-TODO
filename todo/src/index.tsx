import ReactDOM from 'react-dom/client';
import React from 'react';

import App from './components/App';

import './styles/root.css';

let root : ReactDOM.Root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
