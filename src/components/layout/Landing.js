import React, {Component} from 'react';
// import 'react-lazy-load-image-component/src/effects/blur.css';
// import '../../css/landing.scss'
import Header from "../common/Header";
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
            <div>
                <Header/>
                <main>
                    <section className="hero_single version_2">
                        <div className="wrapper">
                            <div className="container">
                                <h3>Book unique experiences</h3>
                                <p>Expolore top rated tours, hotels and restaurants around the world</p>
                                <form>
                                    <div className="row no-gutters custom-search-input-2">
                                        <div className="col-lg-4">
                                            <div className="form-group">
                                                <input className="form-control" type="text" placeholder="Hotel, City..." />
                                                <i className="icon_pin_alt" />
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <input className="form-control" type="text" name="dates" placeholder="When.." />
                                                <i className="icon_calendar" />
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="panel-dropdown">
                                                <a href="#">Guests <span className="qtyTotal">1</span></a>
                                                <div className="panel-dropdown-content">
                                                    {/* Quantity Buttons */}
                                                    <div className="qtyButtons">
                                                        <label>Adults</label>
                                                        <input type="text" name="qtyInput" defaultValue={1} />
                                                    </div>
                                                    <div className="qtyButtons">
                                                        <label>Childrens</label>
                                                        <input type="text" name="qtyInput" defaultValue={0} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-2">
                                            <input type="submit" className="btn_search" defaultValue="Search" />
                                        </div>
                                    </div>
                                    {/* /row */}
                                </form>
                            </div>
                        </div>
                    </section>
                </main>
            </div>

        );
    }
}

Landing.propTypes = {};

export default Landing;