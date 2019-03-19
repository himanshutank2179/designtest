import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../img/logo.png';
import play_store_download from '../../img/play-store-download.png';

export default () => {
    return (
        <footer>
            <div className="contact_info">
                <div className="container">
                    <div className="main_title_2 mt-5">
                        <span><em/></span>
                        <h2 className="color-white">Download App</h2>
                        <p>30 day free trial. Without credit card required</p>

                        <p className="mt-5">
                            <a href="https://play.google.com/store/apps/details?id=com.shapemore"
                               target="_blank">
                                <img src={play_store_download} width="200" data-retina="true" alt=""/>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <div className="container margin_60_35">
                <div className="row">
                    <div className="col-lg-3 col-md-6 pt-3">

                        <p><img src={logo} width="205" height="36" data-retina="true" alt=""/></p>
                        <p>Are you running a Salon? Are you tired of maintaining an appointment dairy or excel sheets.
                            Well, we have a solution for you. A one-stop solution for all of your worries. </p>


                    </div>
                    <div className="col-lg-3 col-md-6 text-lg-center">
                        <h5>Features</h5>
                        <ul className="links">
                            <li>
                                <Link to="/calendar-feature-details">Calendar</Link>
                            </li>
                            <li><Link to="/pos-feature-details">Point Of Sale</Link></li>
                            <li><Link to="/customer-management-feature-details">Manage your clients</Link>
                            </li>
                            <li><Link to="/notification-feature-details">Send Notification</Link></li>
                            <li><Link to="/automated-sms-marketing-feature-details">Automated SMS Marketing</Link></li>
                            <li><Link to="/sales-report-feature-details">Customize Sales Report</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 text-lg-center">
                        <h5>How Can Use?</h5>
                        <ul className="links">
                            <li>
                                <Link to="/beauty-salon">Beauty Salon</Link>
                            </li>
                            <li><Link to="/spa-and-massage">Spa & Massage</Link></li>
                            <li><Link to="/barber">Barber</Link>
                            </li>
                            <li><Link to="/skin-care">Skin Care</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5>Contact with Us</h5>
                        <ul className="contacts">
                            <li><a href="tel://7698585041"><i className="ti-mobile"></i> +91 7698585041</a></li>
                            <li><a href="mailto:support@shapemore.com"><i
                                className="ti-email"></i> support@shapemore.com</a></li>
                            <li><a href="mailto:sales@shapemore.com"><i
                                className="ti-email"></i> sales@shapemore.com</a></li>
                        </ul>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="follow_us">
                            <ul>
                                <li>Follow us</li>
                                <li><a href="https://www.facebook.com/shapemore" target="_blank">
                                    <i className="ti-facebook"/></a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/shapemore_" target="_blank">
                                        <i className="ti-twitter-alt"/></a></li>
                                <li>
                                    <a href="https://in.pinterest.com/shapemore" target="_blank">
                                        <i className="ti-pinterest"/></a></li>
                                <li>
                                    <a href="https://www.instagram.com/shapemore" target="_blank">
                                        <i className="ti-instagram"/></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <ul id="additional_links">
                            <li><Link to="/terms-and-conditions">Terms and conditions</Link></li>
                            <li><Link to="/privacy-policy">Privacy</Link></li>
                            <li><span>© {new Date().getFullYear()} Shapemore Technologies Pvt. Ltd.</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};
