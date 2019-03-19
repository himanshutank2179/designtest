import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../../css/feature-details.scss';

import FeatureDetailLeft from '../common/FeatureDetailLeft';
import FeatureDetailRight from '../common/FeatureDetailRight';
import MFeatureDetailLeft from '../common/MFeatureDetailLeft';
import MFeatureDetailRight from '../common/MFeatureDetailRight';
import one_plus from '../../img/oneplus.png';
import $ from 'jquery';
import ReactGA from "react-ga";

/* images import goes here */
import calendar from '../../img/features-details-images/calendar-features-details/calendar.gif'
import drag_and_drop from '../../img/features-details-images/calendar-features-details/drag_and_drop.gif'
import multiple_service_provider
    from '../../img/features-details-images/calendar-features-details/multiple-service-provider.PNG'
import notify_customer from '../../img/features-details-images/calendar-features-details/notify-cutomer-appt-change.png'
import appt_option_menu from '../../img/features-details-images/calendar-features-details/appt-option-menu.PNG'
import customer_notes from '../../img/features-details-images/calendar-features-details/customer-notes.PNG'
import cal_config from '../../img/features-details-images/calendar-features-details/calendar-configuration.PNG'
import appt_colors from '../../img/features-details-images/calendar-features-details/appt-colors.PNG'
import working_hours from '../../img/features-details-images/calendar-features-details/working-hours.png'

/* images ends */


class CalendarFeatureDetails extends Component {


    componentDidMount() {
        document.title = "Calendar Feature Details";

        /* Adding Google Analytics */
        ReactGA.initialize('UA-115615990-1');
        ReactGA.pageview('/calendar-feature-details');
        /* ... */

        window.scrollTo(0, 0);
        $('.navbar-collapse').removeClass('show');
    }

    render() {
        return (
            <div>
                <main>

                    <section className="hero_in calendar_feature_details">
                        <div className="wrapper">
                            <div className="container">
                                <h1 className="fadeInUp"><span/>Book a appointment <br/> in advance</h1>
                            </div>
                        </div>
                    </section>


                    <div className="mt-5 overflow-hidden">

                        <div className="big_device hidden-md-down">

                            <FeatureDetailLeft
                                image={calendar}
                                title="Appointment History"
                                desc="With this unique feature, you can view your appointments with ease. Above that, it gives you an Overview of your business on a daily, weekly, monthly basis."/>


                            <br/><br/><br/><br/>

                            <FeatureDetailRight
                                image={multiple_service_provider}
                                title="Multiple Service Provider"
                                desc="You can view the appointments allocated to your staff along with the timings. The best part of it is that you can view multiple appointments booked by a different user."/>


                            <br/><br/><br/><br/>


                            <FeatureDetailLeft
                                image={drag_and_drop}
                                title="Drag & Drop"
                                desc="With this option in order to make changes, you can simply drag and drop the appointment and make the required changes."/>


                            <br/><br/><br/><br/>

                            <FeatureDetailRight
                                image={notify_customer}
                                title="Notify Customer on Appointment Changes"
                                desc="One of the most important features which allow you to intimate your client about any changes made in the appointment via SMS, email etc."/>


                            <br/><br/><br/><br/>

                            <FeatureDetailLeft
                                image={appt_option_menu}
                                title="Appointment Option Menu"
                                desc="Helps you to view the detailed information about your customer’s appointment along with its status. You can also update and view the progress of the appointment and towards the end can check out and close (which means task accomplished)."/>

                            <br/><br/><br/><br/>

                            <FeatureDetailRight
                                image={customer_notes}
                                title="Customer Notes"
                                desc="It gives you an edge over the service where you can write notes. For eg: You can write down if they have any allergies, or is there any improvement they require for service provided and also if there is any payment which is pending or which need to be retrieved when the customer comes back."/>

                            <br/><br/><br/><br/>

                            <FeatureDetailLeft
                                image={cal_config}
                                title="Calendar Configuration"
                                desc="It helps you to view the calendar in a customized way. You can have daily, weekly, monthly and yearly calendar view every time you log into your Shapemore account. . Even you can set the time intervals on your calendar between 5,10, or 15 minutes gap."/>


                            <br/><br/><br/><br/>

                            <FeatureDetailRight
                                image={appt_colors}
                                title="Appointment Color"
                                desc="With this feature, you can have a specific colour for your services which will enhance your overall business experience. Above that, it makes easy for you to identify   & plan your day."/>

                            <br/><br/><br/><br/>


                            <FeatureDetailLeft
                                image={working_hours}
                                title="Business Working Hours"
                                desc="Highlight your working hours during the weekdays as well as weekends. Also if any extended working hours, you have during the festive season."/>

                        </div>

                        {/*small device design*/}

                        <div className="container small_device hidden-lg-up">

                            <MFeatureDetailLeft
                                image={calendar}
                                title="Appointment History"
                                desc="With this unique feature, you can view your appointments with ease. Above that, it gives you an Overview of your business on a daily, weekly, monthly basis."
                            />


                            <hr className="newLine"/>

                            <MFeatureDetailRight
                                image={multiple_service_provider}
                                title="Multiple Service Provider"
                                desc="You can view the appointments allocated to your staff along with the timings. The best part of it is that you can view multiple appointments booked by a different user."
                            />


                            <hr className="newLine"/>


                            <MFeatureDetailLeft
                                image={drag_and_drop}
                                title="Drag & Drop"
                                desc="With this option in order to make changes, you can simply drag and drop the appointment and make the required changes."
                            />


                            <hr className="newLine"/>

                            <MFeatureDetailRight
                                image={notify_customer}
                                title="Notify Customer on Appointment Changes"
                                desc="One of the most important features which allow you to intimate your client about any changes made in the appointment via SMS, email etc."
                            />


                            <hr className="newLine"/>


                            <MFeatureDetailLeft
                                image={appt_option_menu}
                                title="Appointment Option Menu"
                                desc="Helps you to view the detailed information about your customer’s appointment along with its status. You can also update and view the progress of the appointment and towards the end can check out and close (which means task accomplished)."
                            />


                            <hr className="newLine"/>

                            <MFeatureDetailRight
                                image={customer_notes}
                                title="Customer Notes"
                                desc="It gives you an edge over the service where you can write notes. For eg: You can write down if they have any allergies, or is there any improvement they require for service provided and also if there is any payment which is pending or which need to be retrieved when the customer comes back."
                            />


                            <hr className="newLine"/>

                            <MFeatureDetailLeft
                                image={cal_config}
                                title="Calendar Configuration"
                                desc="It helps you to view the calendar in a customized way. You can have daily, weekly, monthly and yearly calendar view every time you log into your Shapemore account. . Even you can set the time intervals on your calendar between 5,10, or 15 minutes gap."
                            />


                            <hr className="newLine"/>


                            <MFeatureDetailRight
                                image={appt_colors}
                                title="Appointment Color"
                                desc="With this feature, you can have a specific colour for your services which will enhance your overall business experience. Above that, it makes easy for you to identify   & plan your day."
                            />

                            <hr className="newLine"/>

                            <MFeatureDetailLeft
                                image={working_hours}
                                title="Business Working Hours"
                                desc="Highlight your working hours during the weekdays as well as weekends. Also if any extended working hours, you have during the festive season."
                            />


                        </div>

                        {/*small device design ends */}


                    </div>

                </main>
            </div>
        );
    }
}


export default CalendarFeatureDetails;