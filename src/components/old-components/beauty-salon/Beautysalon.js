import React, {Component} from 'react';
import beauty_salon_bg from '../../img/who can use/beauty-min.jpg';
import ReactGA from "react-ga";
import BigHeader from '../common/BigHeader';
import Feature from '../common/Feature';
import SmallHeader from '../common/SmallHeader';
import {Link} from 'react-router-dom';
import './beautysalon.scss'


class Beautysalon extends Component {
    componentDidMount() {
        document.title = "Beauty Salon";
        window.scrollTo(0, 0);

        /* Adding Google Analytics */
        ReactGA.initialize('UA-115615990-1');
        ReactGA.pageview('/beauty-salon');
        /* ... */
    }

    render() {
        return (
            <main>
                <section className="hero_in beauty_salon"
                         style={{
                             // background: `url(${beauty_salon_bg})`,
                             // backgroundRepeat: 'no-repeat',
                             // backgroundSize: 'cover',
                             // backgroundPosition: '0px  30%',

                         }}>
                    <div className="wrapper">
                        <div className="container">
                            <h1 className="fadeInUp"><span/>Beauty Salon</h1>
                            <p>Cost -effective beauty salon application</p>
                            <Link to="/contact" className="btn_1 rounded">Get a demo</Link>
                        </div>
                    </div>
                </section>


                <div className="container margin_80_55">

                    <BigHeader title="Beauty Salon Software"
                               subTitle=""/>

                    <p>
                        It’s an efficient and affordable way to manage your business. Without any area barriers manage
                        it from any location at your comfort. This modern software helps you to acquire more business
                        and helps you in improving or enhancing customer experience.
                    </p>


                </div>

                <div className="container">

                    <SmallHeader
                        title="Our Salon Software offers you 24*7 hassle free services with unique features like"/>

                    <div className="row">

                        <Feature
                            icon="icon-calendar-7"
                            title="Scheduling"
                            subTitle={<ul className="text-left feature-list">
                                <li><span>Schedule appointments with your clients via Calendar.</span></li>
                                <li><span>Edit appointments easily by simply dragging and clicking.</span></li>
                                <li><span>Your customer can write notes regarding their allergies or if any special
                                    requirements.</span>
                                </li>
                                <li><span>Improves your overall client experience.</span></li>
                            </ul>}
                        />

                        <Feature
                            icon="icon-bell"
                            title="Send Notification"
                            subTitle={
                                <ul className="text-left feature-list">
                                    <li><span> Reminders to your customers via email and text message.</span></li>
                                    <li><span> Update your clients about their upcoming appointments.</span></li>
                                    <li><span> Enhance the experience by sending e-receipts to your clients.</span></li>
                                </ul>
                            }
                        />

                        <Feature
                            icon="icon-comment-empty"
                            title="Automated SMS Marketing"
                            subTitle={
                                <ul className="text-left feature-list">
                                    <li><span> Helps in business expansion.</span></li>
                                    <li><span> Generate target oriented business.</span></li>
                                    <li><span> Tap potential customers.</span></li>
                                    <li><span> Easy way of campaigning with constant support.</span></li>
                                    <li><span> Target the right customers.</span></li>
                                    <li><span> Increase business efficiently.</span></li>
                                    <li>
                                        <span> Effective way of marketing and reach the masses just at your finger tip.</span>
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

export default Beautysalon;