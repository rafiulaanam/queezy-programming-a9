import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <header>
            <h1><Link className='title' to={'/'}>Queezy Programming</Link></h1>
            <nav>
                 <Link className='links' to={'/topics'}>Topics</Link>
                <Link className='links' to={'/statistics'}>Statistics</Link>
                <Link className='links' to={'/blogs'}>Blogs</Link>
            </nav>
            </header>
        </div>
    );
};

export default Header;