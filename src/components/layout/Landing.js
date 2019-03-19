import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import 'react-lazy-load-image-component/src/effects/blur.css';
import '../../css/landing.scss'
import $ from 'jquery';
import Header from "../common/Header";
import logo from "../../img/logo.png";
import logo_sticky from "../../img/logo_sticky.png";
import {Calendar} from "react-calendar";

class Landing extends Component {

    constructor() {
        super();
        this.state = {
            selectTimeDropDown: false,
            date: new Date(),
        }
    }

    onDateChange = date => this.setState({date})

    componentDidMount() {
        window.scrollTo(0, 0);
        document.body.addEventListener('click', () => {
            let selectTimeDropDown = this.state.selectTimeDropDown;
            if (selectTimeDropDown) {
                this.setState({selectTimeDropDown: false});
            }
        });
    }


    render() {

        return (
            <div id="page">
                <Header/>

                <section className="hero_single version_2">
                    <div className="wrapper">
                        <div className="container">
                            <h3>Book unique experiences</h3>
                            <p>Expolore top rated tours, hotels and restaurants around the world</p>
                            <form id="main-search">
                                <div className="row no-gutters custom-search-input-2">
                                    <div className="col-lg-3">
                                        <div className="form-group">
                                            <input className="form-control" type="text"
                                                   placeholder="What are you looking for?"/>
                                            <i className="icon_search"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="form-group">
                                            <input className="form-control" type="text"
                                                   placeholder="Enter City, State or zip code"/>
                                            <i className="icon_pin_alt"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-2">

                                        <select className="wide" style={{display: 'none'}}>
                                            <option>01:00 AM</option>
                                            <option>01:15 AM</option>
                                            <option>01:30 AM</option>
                                            <option>01:45 AM</option>
                                            <option>02:00 AM</option>
                                            <option>02:15 AM</option>
                                            <option>02:30 AM</option>
                                            <option>02:45 AM</option>
                                            <option>03:00 AM</option>
                                        </select>
                                        <div className="nice-select wide" tabIndex={0}><span
                                            className="current">When</span>
                                            <ul className="calendar-list">
                                                <li className="calendar">
                                                    <Calendar
                                                        onChange={this.onChange}
                                                        value={this.state.date}
                                                    />
                                                </li>
                                            </ul>
                                        </div>


                                    </div>


                                    <div className="col-lg-2">

                                        <select className="wide" style={{display: 'none'}}>
                                            <option>01:00 AM</option>
                                            <option>01:15 AM</option>
                                            <option>01:30 AM</option>
                                            <option>01:45 AM</option>
                                            <option>02:00 AM</option>
                                            <option>02:15 AM</option>
                                            <option>02:30 AM</option>
                                            <option>02:45 AM</option>
                                            <option>03:00 AM</option>
                                        </select>
                                        <div className="nice-select wide" tabIndex={0}><span className="current">Select Time</span>
                                            <ul className="list">
                                                <li data-value="01:00 AM" className="option">01:00 AM</li>
                                                <li data-value="01:15 AM" className="option">01:15 AM</li>
                                                <li data-value="01:30 AM" className="option">01:30 AM</li>
                                                <li data-value="01:45 AM" className="option">01:45 AM</li>
                                                <li data-value="02:00 AM" className="option">02:00 AM</li>
                                                <li data-value="02:15 AM" className="option">02:15 AM</li>
                                                <li data-value="02:30 AM" className="option">02:30 AM</li>
                                                <li data-value="02:45 AM" className="option">02:45 AM</li>
                                                <li data-value="03:00 AM" className="option">03:00 AM</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-2">
                                        <input type="submit" className="btn_search" defaultValue="Search"
                                               value="Search"/>
                                    </div>
                                </div>
                                {/* /row */}
                            </form>
                        </div>
                    </div>
                </section>
            </div>

        );
    }
}

Landing.propTypes = {};

export default Landing;