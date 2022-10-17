import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='nav-links m-5 sm:flex justify-between'>
            <div>
                <p className='text-4xl font-bold'>Quizzify Test</p>
            </div>
            <div>
                <Link to='/home'>Home</Link>
                <Link to='/statistics'>Statistics</Link>
                <Link to='/blog'>Blog</Link>
            </div>
        </nav>
    );
};

export default Header;