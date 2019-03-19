import React, {Component} from 'react';
import skin_care from "../../img/who can use/skin_care-min.jpg";
import ReactGA from "react-ga";
import BigHeader from "../common/BigHeader";
import SmallHeader from "../common/SmallHeader";
import Feature from "../common/Feature";
import {Link} from "react-router-dom";

class SkinCare extends Component {
    componentDidMount() {
        document.title = "Skin Care";
        window.scrollTo(0, 0);


        /* Adding Google Analytics */
        ReactGA.initialize('UA-115615990-1');
        ReactGA.pageview('/skin-care');
        /* ... */
    }

    render() {
        return (
            <main>
                <section className="hero_in restaurants skin_care" style={{
                    //background: `url(${skin_care})`,
                    // backgroundRepeat: 'no-repeat',
                    // backgroundSize: 'cover',
                    // backgroundPosition: '0px  100%',

                }}>
                    <div className="wrapper">
                        <div className="container">
                            <h1 className="fadeInUp"><span/>Skin Care</h1>
                            <p>A perfect application for your skin care business</p>
                            <Link to="/contact" className="btn_1 rounded">Get a demo</Link>
                        </div>
                    </div>
                </section>


                <div className="container margin_80_55">

                    <BigHeader title="Skin Care Software"/>

                    <p>
                        Your skin is your best accessory, Take good care of it. Get yourself updated with the latest
                        trends and tips about the skin care industry. Let your customer get one in million experience by
                        using our application.
                    </p>


                </div>

                <div className="container">

                    <SmallHeader title="Features"/>

                    <div className="row">

                        <Feature
                            icon="icon-mobile-1"
                            title="Mobile App for Business Owner"
                            subTitle={
                                <ul className="text-left feature-list">
                                    <li> <span>A user friendly application which makes it easy for you to access even when
                                        you are not at office.</span></li>
                                    <li><span>You can rightly say “Business on the Go”.</span></li>
                                    <li><span>
                                        Get updated about your business performance, Sales, Inventory. Etc. even when
                                        you are
                                    </span>
                                    </li>
                                    <li><span>Traveling all this at the tip of your finger.</span></li>
                                </ul>
                            }
                        />

                        <Feature
                            icon="icon-doc-text"
                            title="Expense Management"
                            subTitle={
                                <ul className="text-left feature-list">
                                    <li> <span>Expense management gives you insight into the expenses occurred via
                                        different channels for eg: EMI, FEES, Utility bills, Rent, Inventory
                                        etc.</span>
                                    </li>
                                    <li><span>It also gives you an idea about the overall business performance</span>
                                    </li>
                                    <li> <span>
                                        It explores a new horizon, wherein you can allocate funds as per the
                                        requirement. You can audit as well as manage funds efficiently & wisely
                                        handle it
                                    </span>
                                    </li>
                                </ul>
                            }
                        />

                        <Feature
                            icon="icon-bell-1"
                            title="SMS Alert"
                            subTitle={
                                <ul className="text-left feature-list">
                                    <li><span>Inform your clients by an Automated SMS which updates them about their
                                        scheduled appointment.</span>
                                    </li>
                                    <li><span>Also inform your staff about their scheduled appointments.</span></li>
                                    <li><span>Enhance the experience by sending e-receipts to your clients.</span></li>
                                    <li><span>Notifies you about your billing.</span></li>
                                </ul>
                            }
                        />

                    </div>

                </div>


            </main>
        );
    }
}

export default SkinCare;