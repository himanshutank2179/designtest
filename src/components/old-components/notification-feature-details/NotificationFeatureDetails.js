import React, {Component} from 'react';

import New_Appointment_and_Reschedule_1
    from '../../img/features-details-images/send-notification/New_Appointment_and_Reschedule_1.png';
import Reminder_Text_SMS_2 from '../../img/features-details-images/send-notification/appt_reminder_text_sms.png';
import Reminder_Email from '../../img/features-details-images/send-notification/appt_email_reminder.png';
import Appointment_Cancel_Text_SMS_4
    from '../../img/features-details-images/send-notification/Appointment_Cancel_Text_SMS_4.png';
import Invoice_SMS_6 from '../../img/features-details-images/send-notification/Invoice_SMS_6.png';
import Email_Invoice_5 from '../../img/Email_Invoice_5.PNG';
import FeatureDetailLeft from "../common/FeatureDetailLeft";
import FeatureDetailRight from "../common/FeatureDetailRight";
import MFeatureDetailLeft from '../common/MFeatureDetailLeft';
import MFeatureDetailRight from '../common/MFeatureDetailRight';
import '../../css/feature-details.scss';

import $ from "jquery";
import ReactGA from "react-ga";


class NotificationFeatureDetails extends Component {

    componentDidMount() {
        document.title = "Notifications Features Details";
        window.scrollTo(0, 0);
        $('.navbar-collapse').removeClass('show');

        /* Adding Google Analytics */
        ReactGA.initialize('UA-115615990-1');
        ReactGA.pageview('/notification-feature-details');
        /* ... */
    }

    render() {
        return (
            <div>

                <main>

                    <section className="hero_in send_notification">
                        <div className="wrapper">
                            <div className="container">
                                <h1 className="fadeInUp"><span />Improves customer experience</h1>
                            </div>
                        </div>
                    </section>


                    <div className="mt-5 overflow-hidden">

                        <div className="big_device hidden-md-down">

                            <FeatureDetailLeft
                                image={New_Appointment_and_Reschedule_1}
                                title="New Appointment or Reschedule"
                                desc="A unique feature which sends SMS to your customer about their new appointment or if they have rescheduled it. It enhances your customers experience with your salon."/>


                            <br/><br/><br/><br/>

                            <FeatureDetailRight
                                image={Reminder_Text_SMS_2}
                                title="Appointment Reminder"
                                desc="It’s a feature which sends a reminder SMS to the customer about his appointment along with your salon's name, the timing of the appointment."/>


                            <br/><br/><br/><br/>


                            <FeatureDetailLeft
                                image={Reminder_Email}
                                title="Appointment Reminder Email"
                                desc="With this feature, you can send a reminder e-mail which is a step further than SMS. It gives your customer the detailed information about the type of is appointment, day & time. Above that, it also gives information about the attendant at the salon along with email Id & contact information of the salon."/>


                            <br/><br/><br/><br/>

                            <FeatureDetailRight
                                image={Appointment_Cancel_Text_SMS_4}
                                title="Cancel Appointment"
                                desc="In case if an appointment has been cancelled due to unavoidable circumstances, the customer is made aware of it in order to avoid inconvenience."/>


                            <br/><br/><br/><br/>

                            <FeatureDetailLeft
                                image={Invoice_SMS_6}
                                title="Receipt SMS"
                                desc="The customer receives an SMS regarding the payment received by you along with the amount, mode of payment as well as receipt number. In case if the customer wants to rebook the appointment it provides your number as well."/>


                            <br/><br/><br/><br/>


                            <FeatureDetailRight
                                image={Email_Invoice_5}
                                title="Receipt Email"
                                desc="It’s one of the best features which enhances your customer’s experience. The customer shall get detailed information about the services undertaken and its price against it."/>


                        </div>

                        <div className="small_device hidden-lg-up">

                            <MFeatureDetailLeft
                                image={New_Appointment_and_Reschedule_1}
                                title="New Appointment or Reschedule(sms)"
                                desc="A unique feature which sends SMS to your customer about their new appointment or if they have rescheduled it. It enhances your customers experience with your salon."/>

                            <hr className="newLine"/>

                            <MFeatureDetailRight
                                image={Reminder_Text_SMS_2}
                                title="Appointment Reminder (SMS)"
                                desc="It’s a feature which sends a reminder SMS to the customer about his appointment along with your salon's name, the timing of the appointment."/>

                            <hr className="newLine"/>


                            <MFeatureDetailLeft
                                image={Reminder_Email}
                                title="Appointment Reminder Email"
                                desc="With this feature, you can send a reminder e-mail which is a step further than SMS. It gives your customer the detailed information about the type of is appointment, day & time. Above that, it also gives information about the attendant at the salon along with email Id & contact information of the salon."/>

                            <hr className="newLine"/>

                            <MFeatureDetailRight
                                image={Appointment_Cancel_Text_SMS_4}
                                title="Cancel Appointment (SMS)"
                                desc="In case if an appointment has been cancelled due to unavoidable circumstances, the customer is made aware of it in order to avoid inconvenience."/>

                            <hr className="newLine"/>

                            <MFeatureDetailLeft
                                image={Invoice_SMS_6}
                                title="Receipt SMS"
                                desc="The customer receives an SMS regarding the payment received by you along with the amount, mode of payment as well as receipt number. In case if the customer wants to rebook the appointment it provides your number as well."/>

                            <hr className="newLine"/>

                            <MFeatureDetailRight
                                image={Email_Invoice_5}
                                title="Receipt Email"
                                desc="It’s one of the best features which enhances your customer’s experience. The customer shall get detailed information about the services undertaken and its price against it."/>

                        </div>


                    </div>

                </main>

            </div>
        );
    }
}


export default NotificationFeatureDetails;