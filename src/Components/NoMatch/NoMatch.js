import React from 'react';
import { Link } from 'react-router-dom';

const NoMatch = () => {
    return (
        <div>
            <h3>You are in wrong route</h3>
            <h2>Please GO To...</h2>
            <h1><Link to="/">HOME</Link></h1>
        </div>
    );
};

export default NoMatch;