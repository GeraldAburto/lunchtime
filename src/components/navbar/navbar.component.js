import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
            <nav>
                <div className='nav-wrapper container'>
                    <Link to='/' className='brand-logo'>Lunch Time</Link>
                    <ul id='nav-mobile' className='right hide-on-med-and-down'>
                        <li><Link to='/today'>Today</Link></li>
                        <li><Link to='/calendar'>Calendar</Link></li>
                        <li><Link to='/login'>Sing in</Link></li>
                        <li><Link to='/register'>Sing up</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;