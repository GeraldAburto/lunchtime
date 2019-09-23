import React from 'react'

const Footer = () => {
    return (
        <footer className='page-footer'>
            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <h5 class="white-text">Lunch Time</h5>
                        <p class="grey-text text-lighten-4">Developed with  by Gerald Aburto.</p>
                    </div>
                    <div class="col l4 offset-l2 s12">
                        <h5 class="white-text">Find me on Github</h5>
                        <ul>
                            <li><a class="grey-text text-lighten-3" href="#!">Github</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footer-copyright">
                <div class="container">© 2019 All right reserved.</div>
            </div>
        </footer>
    );
};

export default Footer;