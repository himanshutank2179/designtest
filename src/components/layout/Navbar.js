import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import logo from "../../img/logo.png";
import logo_sticky from "../../img/logo_sticky.png";


class Navbar extends Component {

    goToTop() {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }

    render() {
        return (
            <header className="header menu_fixed">
                <div id="preloader">
                    <div data-loader="circle-side"/>
                </div>

                <div id="logo">
                    <NavLink to="/">
                        <img src={logo_sticky} width="205" height="36" data-retina="true" alt=""
                             className="logo_normal"/>
                        <img src={logo_sticky} width="205" height="36" data-retina="true" alt=""
                             className="logo_sticky"/>
                    </NavLink>
                </div>

                <a href="#menu" className="btn_mobile" data-toggle="collapse" data-target="#navbarNavDropdown"
                   aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"
                   id="dlDropDown">
                    <div className="hamburger hamburger--spin" id="hamburger">
                        <div className="hamburger-box">
                            <div className="hamburger-inner"/>
                        </div>
                    </div>
                </a>


                <nav id="menu" className="main-menu hidden-md-down">
                    <ul>

                        <li><span><a href="javascript:;">Features</a></span>
                            <ul>
                                <li>
                                    <NavLink to="/calendar-feature-details">Calendar</NavLink>
                                </li>
                                <li><NavLink to="/pos-feature-details">Point Of Sale</NavLink></li>
                                <li><NavLink to="/customer-management-feature-details">Manage your clients</NavLink>
                                </li>
                                <li><NavLink to="/notification-feature-details">Send Notification</NavLink></li>
                                <li><NavLink to="/automated-sms-marketing-feature-details">Automated SMS
                                    Marketing</NavLink></li>
                                <li><NavLink to="/sales-report-feature-details">Customize Sales Report</NavLink></li>

                            </ul>
                        </li>
                        <li><span><NavLink to="/contact">Contact Us</NavLink></span></li>
                        <li><span><NavLink to="/support">Support</NavLink></span></li>
                        <li><span><NavLink to="/contact" className="btn-request">Get a demo</NavLink></span></li>
                    </ul>
                </nav>


                <nav id="mobile-menu" className="navbar  navbar-light bg-light hidden-lg-up">
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Features
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <NavLink className="dropdown-item" to="/calendar-feature-details">Calendar</NavLink>
                                    <NavLink className="dropdown-item" to="/pos-feature-details">Point Of
                                        Sale</NavLink>
                                    <NavLink className="dropdown-item" to="/customer-management-feature-details">Manage
                                        your clients</NavLink>
                                    <NavLink className="dropdown-item" to="/notification-feature-details">Send
                                        Notification</NavLink>
                                    <NavLink className="dropdown-item" to="/automated-sms-marketing-feature-details">Automated
                                        SMS
                                        Marketing</NavLink>
                                    <NavLink className="dropdown-item" to="/sales-report-feature-details">Customize
                                        Sales
                                        Report</NavLink>

                                </div>
                            </li>
                            <li className="nav-item active"><span><NavLink className="nav-link"
                                                                           to="/contact">Contact Us</NavLink></span>
                            </li>
                            <li className="nav-item active"><span><NavLink className="nav-link"
                                                                           to="/support">Support</NavLink></span></li>
                            <li className="nav-item active"><span><NavLink className="btn-request nav-link" to="/contact">Get a demo</NavLink></span>
                            </li>
                        </ul>
                    </div>
                </nav>

                {/*Bottom To Top Shortcut Button*/}
                {/*<div id="toTop" onClick={this.goToTop}/>*/}

            </header>
        );
    }
}


export default Navbar;
