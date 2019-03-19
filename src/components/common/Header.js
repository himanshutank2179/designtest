import React from 'react';
import logo from '../../img/logo.png'
import logo_sticky from '../../img/logo_sticky.png'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <header className="header menu_fixed">
                <div id="preloader">
                    <div data-loader="circle-side"/>
                </div>
                {/* /Page Preload */}
                <div id="logo">
                    <a href="index.html">
                        <img src={logo} width={200} data-retina="true" alt className="logo_normal"/>
                        <img src={logo_sticky} width={200} data-retina="true" alt
                             className="logo_sticky"/>
                    </a>
                </div>
                <nav id="menu" className="main-menu">
                    <ul>
                        <li><span><Link to="/">Log In</Link></span></li>
                        <li><span><Link to="/">Sign Up</Link></span></li>
                        <li><span><Link className="btn-request" to="/">List your business</Link></span></li>

                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Header;