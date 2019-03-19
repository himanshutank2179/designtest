import React, {Component} from 'react';

import lan from '../../img/features-details-images/pos-features-details/LAN.png';
import usb from '../../img/features-details-images/pos-features-details/USB.jpg';
import wifi from '../../img/features-details-images/pos-features-details/Wifi.jpe';
import Accept_mixed_payment_mode from '../../img/features-details-images/pos-features-details/Accept_mixed_payment_mode_2.png'
import quick_checkout from '../../img/features-details-images/pos-features-details/Quick_checout_a.png';
import $ from "jquery";
import ReactGA from "react-ga";
import FeatureDetailLeft from "../common/FeatureDetailLeft";
import FeatureDetailRight from "../common/FeatureDetailRight";
import MFeatureDetailLeft from "../common/MFeatureDetailLeft";
import MFeatureDetailRight from "../common/MFeatureDetailRight";

class PosFeatureDetails extends Component {

    componentDidMount() {
        document.title = "Point Of Sale Features Details";
        window.scrollTo(0, 0);
        $('.navbar-collapse').removeClass('show');

        /* Adding Google Analytics */
        ReactGA.initialize('UA-115615990-1');
        ReactGA.pageview('/pos-feature-details');
        /* ... */
    }

    render() {
        return (
            <main>
                <section className="hero_in pos">
                    <div className="wrapper">
                        <div className="container">
                            <h1 className="fadeInUp"><span/>Increase your sales and profitability</h1>
                        </div>
                    </div>
                </section>
                {/*/hero_in*/}
                <div className="mt-5 overflow-hidden">
                    <div className="big_device hidden-md-down">
                        {/*Left*/}

                        <FeatureDetailLeft
                            image={quick_checkout}
                            title="Quick Checkout"
                            desc="It gives you the option of manual checkout where you can sell your service with flexible discounts even you can apply promo code along with GST. You can give a customised receipt to your client via different modes."/>


                        <br/><br/><br/><br/>

                        <FeatureDetailRight
                            image={Accept_mixed_payment_mode}
                            title="Accept mixed payment mode"
                            desc="Gives you different payment options. You can accept payments via Cards, Cash, and Cheque etc. You can also have mixed mode wherein you can make half payment via cash and half payment via card."/>


                        <br/><br/><br/><br/>


                        <FeatureDetailLeft
                            image={usb}
                            title="USB Thermal Receipt printer"
                            desc="Use thermal printing technology without the need for expensive ink or toner. The USB port is connected to the computer to print. Small size to save space, easy to use on your desk while working, Support Windows, Linux System. Thermal means you will never need to replace an ink cartridge again."/>


                        <br/><br/><br/><br/>
                        {/*Right*/}

                        <FeatureDetailRight
                            image={wifi}
                            title="Wifi Thermal Receipt Printer"
                            desc="Ultra High-speed printing. USB and Wi-Fi Interface. Helps you to print a receipt at your comfort and convenience."/>

                        <br/><br/><br/><br/>
                        {/*Left*/}

                        <FeatureDetailLeft
                            image={lan}
                            title="LAN Thermal Receipt Printer"
                            desc="Designed with an adaptable mounting capability. Compactly designed. Selectable Paper Width."/>

                    </div>

                    {/*Design for small devices*/}

                    <div className="small_device hidden-lg-up">


                        <MFeatureDetailLeft
                            image={quick_checkout}
                            title="Quick Checkout"
                            desc="It gives you the option of manual checkout where you can sell your service with flexible discounts even you can apply promo code along with GST. You can give a customised receipt to your client via different modes."/>


                        <hr className="newLine"/>

                        <MFeatureDetailRight
                            image={Accept_mixed_payment_mode}
                            title="Accept mixed payment mode"
                            desc="Gives you different payment options. You can accept payments via Cards, Cash, and Cheque etc. You can also have mixed mode wherein you can make half payment via cash and half payment via card."/>


                        <hr className="newLine"/>


                        <MFeatureDetailLeft
                            image={usb}
                            title="USB Thermal Receipt printer"
                            desc="Use thermal printing technology without the need for expensive ink or toner. The USB port is connected to the computer to print. Small size to save space, easy to use on your desk while working, Support Windows, Linux System. Thermal means you will never need to replace an ink cartridge again."/>


                        <hr className="newLine"/>

                        <MFeatureDetailRight
                            image={wifi}
                            title="Wifi Thermal Receipt Printer"
                            desc="Ultra High-speed printing. USB and Wi-Fi Interface. Helps you to print a receipt at your comfort and convenience."/>

                        <hr className="newLine"/>


                        <MFeatureDetailLeft
                            image={lan}
                            title="LAN Thermal Receipt Printer"
                            desc="Designed with an adaptable mounting capability. Compactly designed. Selectable Paper Width."/>

                    </div>

                    {/*Design ends for small devices*/}

                </div>
            </main>
        );
    }
}

export default PosFeatureDetails;