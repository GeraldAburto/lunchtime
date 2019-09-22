import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div className='nav-wrapper'>
                <Link to='/' className='brand-logo'>KodeIn Lunch</Link>
                <ul id='nav-mobile' className='right hide-on-med-and-down'>
                    <li><Link to='/today'>Today</Link></li>
                    <li><Link to='/calendar'>Calendar</Link></li>
                    <li><Link to='/login'>Sing in</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;