import React from 'react';
import { auth } from '../../firebase/firebase.utils';

const CurrentUser = () => {
    return (
        <ul id="currentuserdropdown" className="dropdown-content">
            <li><a href='#/' onClick={() => auth.signOut()}> Sign Out </a></li>
        </ul>
    );
};

export default CurrentUser;