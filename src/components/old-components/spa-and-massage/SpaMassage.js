import React, {Component} from 'react';
import spaMassage from "../../img/who can use/spa-min.jpg";
import ReactGA from "react-ga";
import BigHeader from "../common/BigHeader";
import SmallHeader from "../common/SmallHeader";
import Feature from "../common/Feature";
import './spa-and-massage.scss';
import {Link} from "react-router-dom";

class SpaMassage extends Component {
    componentDidMount() {
        document.title = "Spa & Massage";
        window.scrollTo(0, 0);

        /* Adding Google Analytics */
        ReactGA.initialize('UA-115615990-1');
        ReactGA.pageview('/spa-and-massage');
        /* ... */
    }

    render() {
        return (
            <main>
                <section className="hero_in restaurants spa" style={{
                    // background: `url(${spaMassage})`,
                    // backgroundRepeat: 'no-repeat',
                    // backgroundSize: 'cover',
                    // backgroundPosition: '0px  20%',

                }}>
                    <div className="wrapper">
                        <div className="container">
                            <h1 className="fadeInUp"><span/>Spa & Massage</h1>
                            <p>Managing your beauty salon was never so easy</p>
                            <Link to="/contact" className="btn_1 rounded">Get a demo</Link>
                        </div>
                    </div>
                </section>

                <div className="container margin_80_55">

                    <BigHeader title="Spa & Massage Software"/>

                    <p>
                        Rejuvenation is something which is on a clients mind when they come to a SPA. How about giving
                        them best in class service which motivates them to return back. With our App you can give a
                        wonderful experience which will grab your client’s attention as well as ensures that they come
                        back.
                    </p>


                </div>

                <div className="container">

                    <SmallHeader title="Missing features"/>

                    <div className="row">

                        <Feature
                            icon="icon-website"
                            title="Resources"
                            subTitle={
                                <ul className="text-left feature-list">
                                    <li>
                                        <span>It helps you book the rooms in advance and reduce customer wait time.</span>
                                    </li>
                                </ul>
                            }
                        />

                        <Feature
                            icon="icon-doc-text"
                            title="Point of Sale"
                            subTitle={
                                <ul className="text-left feature-list">
                                    <li><span>Increase your sales & profitability.</span></li>
                                    <li><span>It will enable you to make relevant reports in timely manner.</span></li>
                                    <li><span>Instant access which will improve customer experience. Apart from</span>
                                    </li>
                                    <li><span>Card payments help you maintain cash register hassle free.</span></li>
                                    <li><span>It also comes with TAX invoice.</span></li>
                                </ul>
                            }
                        />

                        <Feature
                            icon="icon-user-delete"
                            title="Reduce No Show"
                            subTitle={
                                <ul className="text-left feature-list">
                                    <li><span>Use Automated reminders. Minimise the waiting time.</span></li>
                                    <li><span>BE thankful to customers who arrives on time.</span></li>
                                    <li><span>Scheduled appointments as soon as you receive a call.</span></li>
                                    <li><span>Ensure after sales service by taking feedback from the customers.</span>
                                    </li>
                                </ul>
                            }
                        />

                    </div>

                </div>


            </main>
        );
    }
}

export default SpaMassage;