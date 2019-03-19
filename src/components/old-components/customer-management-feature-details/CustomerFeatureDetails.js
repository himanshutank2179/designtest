import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../../css/feature-details.scss';

import Customer_Information_1 from '../../img/features-details-images/customer-management/Customer_Information_1.png';
import Appointment_History_2
    from '../../img/features-details-images/customer-management/Customer_Noted_Mobie_frame.png';
import Customer_Noted_Mobie_frame from '../../img/features-details-images/calendar-features-details/customer-notes.PNG'
import $ from "jquery";
import ReactGA from "react-ga";
import one_plus from "../../img/oneplus.png";
import FeatureDetailLeft from "../common/FeatureDetailLeft";
import FeatureDetailRight from "../common/FeatureDetailRight";
import MFeatureDetailLeft from '../common/MFeatureDetailLeft';
import MFeatureDetailRight from '../common/MFeatureDetailRight';


class CustomerFeatureDetails extends Component {
    componentDidMount() {
        document.title = "Customer Features Details";
        window.scrollTo(0, 0);
        $('.navbar-collapse').removeClass('show');

        /* Adding Google Analytics */
        ReactGA.initialize('UA-115615990-1');
        ReactGA.pageview('/customer-management-feature-details');
        /* ... */
    }

    render() {
        return (
            <div>
                <main>

                    <section className="hero_in customer_management">
                        <div className="wrapper">
                            <div className="container">
                                <h1 className="fadeInUp"><span/>Hassle free appointments</h1>
                            </div>
                        </div>
                    </section>


                    <div className="mt-5 overflow-hidden">

                        <div className="big_device hidden-md-down">

                            <FeatureDetailLeft
                                image={Customer_Information_1}
                                title="Customer Information"
                                desc="It gives you a piece of detailed information about Customers profile which includes his/her Full Name, Gender, and Services undertaken till date. When was the last visit made and also the business from that particular customer? If there has been any No-show and also if any notes related to a customer."/>

                            <br/><br/><br/><br/>

                            <FeatureDetailRight
                                image={Appointment_History_2}
                                title="Appointment History"
                                desc="It gives you in-depth information about the services undertaken by the customer as well as who was the attendant. Above that, you can also view out of the booked appointments how many were confirmed, cancelled or no show."/>


                            <br/><br/><br/><br/>

                            <FeatureDetailLeft
                                image={Customer_Noted_Mobie_frame}
                                title="Customer Notes"
                                desc="You can view the notes made your staff about a particular customer under special headings. Whether it is a general comment/or Allergy/ Service."/>

                        </div>

                        {/*Small Device Design */}

                        <div className="small_device hidden-lg-up">


                            <MFeatureDetailLeft
                                image={Customer_Information_1}
                                title="Customer Information"
                                desc="It gives you a piece of detailed information about Customers profile which includes his/her Full Name, Gender, and Services undertaken till date. When was the last visit made and also the business from that particular customer? If there has been any No-show and also if any notes related to a customer."/>

                            <hr className="newLine"/>

                            <MFeatureDetailRight
                                image={Appointment_History_2}
                                title="Appointment History"
                                desc="It gives you in-depth information about the services undertaken by the customer as well as who was the attendant. Above that, you can also view out of the booked appointments how many were confirmed, cancelled or no show."/>


                            <hr className="newLine"/>

                            <MFeatureDetailLeft
                                image={Customer_Noted_Mobie_frame}
                                title="Customer Notes"
                                desc="You can view the notes made your staff about a particular customer under special headings. Whether it is a general comment/or Allergy/ Service."/>


                        </div>

                        {/*design ends for small device*/}


                    </div>

                </main>
            </div>
        );
    }
}

export default CustomerFeatureDetails;