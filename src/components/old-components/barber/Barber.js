import React, {Component} from 'react';
import barbar from "../../img/who can use/barbar.jpg";
import ReactGA from "react-ga";
import BigHeader from "../common/BigHeader";
import SmallHeader from "../common/SmallHeader";
import Feature from "../common/Feature";
import {Link} from "react-router-dom";

class Barber extends Component {
    componentDidMount() {
        document.title = "Barber";
        window.scrollTo(0, 0);

        /* Adding Google Analytics */
        ReactGA.initialize('UA-115615990-1');
        ReactGA.pageview('/barber');
        /* ... */
    }

    render() {
        return (
            <main>
                <section className="hero_in restaurants barber" style={{
                    //background: `url(${barbar})`,
                    // backgroundRepeat: 'no-repeat',
                    // backgroundSize: 'cover',
                    // backgroundPosition: '0px  10%',

                }}>
                    <div className="wrapper">
                        <div className="container">
                            <h1 className="fadeInUp"><span/>Barber</h1>
                            <p>An Amazing hair salon application</p>
                            <Link to="/contact" className="btn_1 rounded">Get a demo</Link>
                        </div>
                    </div>
                </section>

                <div className="container margin_80_55">

                    <BigHeader title="Barber & Hair Salon Software"/>

                    <p>
                        Want to increase your revenue then you are at the right place, Get yourself indulge with the
                        latest trends and updates from the beauty world. Enhance your customers experience with your
                        upgraded knowledge about the beauty industry. In order to succeed we must first believe that we
                        can and to believe you should try our application. As we cannot spell “SUCCESS” without “US”.
                    </p>


                </div>

                <div className="container">

                    <SmallHeader title="We offer you 24*7 hassle free services with unique features like"/>

                    <div className="row">

                        <Feature
                            icon="icon-mail-alt"
                            title="SMS or Text Messaging"
                            subTitle={
                                <ul className="text-left feature-list">
                                    <li><span>Update your clients about their upcoming appointments.</span></li>
                                    <li><span>Also inform your staff about their scheduled appointments.</span></li>
                                    <li><span>Enhance the experience by sending e-receipts to your clients.</span></li>
                                    <li><span>Notifies you about your billing.</span></li>
                                </ul>
                            }
                        />

                        <Feature
                            icon="icon-laptop-1"
                            title="Dashboard"
                            subTitle={
                                <ul className="text-left feature-list">
                                    <li><span>Get customised report based on your requirement.</span></li>
                                    <li><span>Your appointments, attendance, sales, revenue, growth etc.</span></li>
                                    <li><span>Gives you an insight into top services.</span></li>
                                    <li><span>Helps you to focus on area of concerns or product which requires more
                                        attention.</span>
                                    </li>
                                    <li><span>Helps you in organising or managing business strategies.</span></li>
                                    <li>
                                        <span>Can also manage staff wise sales, enables you to appreciate your people.</span>
                                    </li>
                                    <li><span>Improves your overall performance.</span></li>
                                </ul>
                            }
                        />

                        <Feature
                            icon="icon-group"
                            title="Manage your customers"
                            subTitle={
                                <ul className="text-left feature-list">
                                    <li><span>Handle your client’s confidential data efficiently.</span></li>
                                    <li><span>Attract your customers with the best in industry service, hassle free
                                        appointments.</span>
                                    </li>
                                    <li><span>Send Information about Promotional Offers to Loyal Customers.</span></li>
                                </ul>
                            }
                        />

                    </div>

                </div>


            </main>
        );
    }
}

export default Barber;