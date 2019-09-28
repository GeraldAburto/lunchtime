import React from 'react'
import './footer.styles.css';

const Footer = () => {
    return (
        <footer className='page-footer'>
            <div className='container'>
                <div className='row'>
                    <div className='col l6 s12'>
                        <h5 className='white-text'>Lunch Time</h5>
                        <p className='grey-text text-lighten-4'>Developed with <span role='img' aria-label='heart'> ❤️</span> by Gerald Aburto.</p>
                    </div>
                    <div className='col l4 offset-l2 s12'>
                        <h5 className='white-text'>Find me on Github</h5>
                        <ul>
                            <li><a className='grey-text text-lighten-3 gh-link' href='https://github.com/GeraldAburto/lunchtime' target='_blank' rel="noopener noreferrer"><span className='gh-ico'></span>  Lunch Time repo</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='footer-copyright'>
                <div className='container'>© 2019 all rights reserved - v0.1.0</div>
            </div>
        </footer>
    );
};

export default Footer;