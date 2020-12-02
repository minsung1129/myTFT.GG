import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App'
import Menubar from './component/Menubar'

const Root = () => (
    <BrowserRouter>
        <Menubar />
        <App />
    </BrowserRouter>
);

export default Root;