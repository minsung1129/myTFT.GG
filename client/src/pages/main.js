import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
            <hr />
        </div>
    );
};

export default Main;