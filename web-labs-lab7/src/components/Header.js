import React from 'react';
import '../styles/Header.css';

const Header = () => {
    return (
        <header>
            <div className="header__text-box">
                <h1>Premium<br/><span className="underline-header">Car</span><br/>Kiev</h1>
                <p>Kiev top-tier car collection</p>
            </div>
        </header>
    );
};

export default Header;