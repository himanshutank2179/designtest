import React, {Component} from 'react';

import Run_personalized_SMS_campaign from '../../img/features-details-images/automated-sms-marketing/coupon list.PNG';
import Type_Offer_SMS_text from '../../img/features-details-images/automated-sms-marketing/offer text.PNG';
import Apply_Coupon_Right_From_Checkout_Screen from '../../img/features-details-images/pos-features-details/Quick_checout_a.png';
import FeatureDetailLeft from "../common/FeatureDetailLeft";
import FeatureDetailRight from "../common/FeatureDetailRight";
import MFeatureDetailLeft from '../common/MFeatureDetailLeft';
import MFeatureDetailRight from '../common/MFeatureDetailRight';
import '../../css/feature-details.scss';
import $ from "jquery";
import ReactGA from "react-ga";
import Customer_Information_1 from "../../img/Customer_Information_1.PNG";
import Appointment_History_2 from "../../img/Appointment_History_2.png";

class AutoSmsMaretingFeatureDetails extends Component {

    componentDidMount() {
        document.title = "Automatic SMS Marketing Features Details";
        window.scrollTo(0, 0);
        $('.navbar-collapse').removeClass('show');

        /* Adding Google Analytics */
        ReactGA.initialize('UA-115615990-1');
        ReactGA.pageview('/automated-sms-marketing-feature-details');
        /* ... */
    }

    render() {
        return (
            <main>
                <section className="hero_in automated_sms_marketing">
                    <div className="wrapper">
                        <div className="container">
                            <h1 className="fadeInUp"><span/>Promotional Offers to Loyal Customers</h1>
                        </div>
                    </div>
                </section>
                {/*/hero_in*/}
                <div className="mt-5 overflow-hidden">
                    <div className="big_device hidden-md-down">

                        <FeatureDetailLeft
                            image={Run_personalized_SMS_campaign}
                            title="Run personalized SMS campaign"
                            desc="You can send SMS to your customer’s about the offers/discounts available at your salon. It also updates you about the Inactive numbers."/>


                        <br/><br/><br/><br/>

                        <FeatureDetailRight
                            image={Type_Offer_SMS_text}
                            title="Type Offer SMS Text"
                            desc="Announce an offer of the day and send SMS to your customer along with the expiry date of the same. It also goes you an opportunity to review your announcement before you send it to your multiple customers."/>


                        <br/><br/><br/><br/>

                        <FeatureDetailLeft
                            image={Apply_Coupon_Right_From_Checkout_Screen}
                            title="Apply Coupon Right From Checkout Screen"
                            desc="Gives you the benefit of applying coupon code on your check out screen."/>


                    </div>

                    <div className="small_device hidden-lg-up">
                        <MFeatureDetailLeft
                            image={Run_personalized_SMS_campaign}
                            title="Run personalized SMS campaign"
                            desc="You can send SMS to your customer’s about the offers/discounts available at your salon. It also updates you about the Inactive numbers."/>


                        <hr className="newLine"/>

                        <MFeatureDetailRight
                            image={Type_Offer_SMS_text}
                            title="Type Offer SMS Text"
                            desc="Announce an offer of the day and send SMS to your customer along with the expiry date of the same. It also goes you an opportunity to review your announcement before you send it to your multiple customers."/>


                        <hr className="newLine"/>

                        <MFeatureDetailLeft
                            image={Apply_Coupon_Right_From_Checkout_Screen}
                            title="Apply Coupon Right From Checkout Screen"
                            desc="Gives you the benefit of applying coupon code on your check out screen."/>


                    </div>
                </div>
            </main>
        );
    }
}

export default AutoSmsMaretingFeatureDetails;