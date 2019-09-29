import React from 'react';
import { Link } from 'react-router-dom';
import M from 'materialize-css/dist/js/materialize';
import { auth } from '../../firebase/firebase.utils';

class Navbar extends React.Component {

    componentDidMount() {

        console.log('componentDidMount')
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
        let elems = document.querySelectorAll('.dropdown-trigger');
        if (elems && elems.length > 0) {
            M.Dropdown.init(elems, { coverTrigger: false, autoTrigger: false });
        }
    }

    render() {
        const { currentUser } = this.props;
        return (
            <header>
                <nav>
                    <div className='nav-wrapper container'>
                        <Link to='/' className='brand-logo'>Lunch Time</Link>
                        <ul id='nav-mobile' className='right hide-on-med-and-down'>
                            <li><Link to='/today'>Today</Link></li>
                            <li><Link to='/calendar'>Calendar</Link></li>
                            {
                                currentUser ?
                                    <li><a className='dropdown-trigger' data-target='currentuserdropdown' href='#/'>{currentUser.displayName} <i className="material-icons right">arrow_drop_down</i></a></li>
                                    :
                                    (
                                        [
                                            <li key={0}><Link to='/login'>Sing in</Link></li>,
                                            <li key={1}><Link to='/register'>Sing up</Link></li>
                                        ]
                                    )
                            }
                        </ul>
                    </div>
                </nav>
                <ul id="currentuserdropdown" className="dropdown-content">
                    <li><a href='#/' onClick={() => auth.signOut()}> Sign Out </a></li>
                </ul>
            </header>
        );
    }
};

export default Navbar;
