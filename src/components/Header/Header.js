import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import logo from '../assets/logo.svg'

const Header = () => {
    return (
        <nav className='nav-links m-5 sm:flex justify-between'>
            <div className='flex'>
                <img src={logo} alt="" />
                <p className='text-4xl font-bold'>uizzify</p>
            </div>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/statistics'>Statisticss</Link>
                <Link to='/blog'>Blog</Link>
            </div>
        </nav>
    );
};

export default Header;