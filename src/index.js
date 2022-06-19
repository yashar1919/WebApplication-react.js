import React from 'react';
import App from './App';
import { render } from '@testing-library/react';
import './index.css';   //file css k padding o margin haye default ro hazf mikone
import { BrowserRouter } from 'react-router-dom';  // for SPA website

render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.getElementById("root")
);
