import React, {Component} from 'react';
import Dashboard_potrait from '../../img/features-details-images/sales-reports/dashboard.png';
import Most_Sold_Services from '../../img/features-details-images/sales-reports/top 10 services.png';
import Checkout_Details_Print_Receipt from '../../img/features-details-images/sales-reports/checkout details.png';
import FeatureDetailLeft from "../common/FeatureDetailLeft";
import FeatureDetailRight from "../common/FeatureDetailRight";
import MFeatureDetailLeft from '../common/MFeatureDetailLeft';
import MFeatureDetailRight from '../common/MFeatureDetailRight';

import $ from "jquery";
import ReactGA from "react-ga";

class SalesReportFeatureDetails extends Component {
    componentDidMount() {
        document.title = "Sales Report Features Details";
        window.scrollTo(0, 0);
        $('.navbar-collapse').removeClass('show');

        /* Adding Google Analytics */
        ReactGA.initialize('UA-115615990-1');
        ReactGA.pageview('/sales-report-feature-details');
        /* ... */
    }

    render() {
        return (
            <div>
                <main>
                    <section className="hero_in sales_report">
                        <div className="wrapper">
                            <div className="container">
                                <h1 className="fadeInUp"><span/>Gives you an insight into <br/> top selling services</h1>
                            </div>
                        </div>
                    </section>
                    {/*/hero_in*/}
                    <div className="mt-5 overflow-hidden">
                        <div className="big_device hidden-md-down">
                            <FeatureDetailLeft
                                image={Dashboard_potrait}
                                title="Dashboard"
                                desc="The most important feature of any business is its sales & profit. This feature helps you to get an overall performance of a month. It gives you details about: Daily Appointments, Upcoming Appointments, Total Number of Appointments booked, No of Checkouts, Checkouts value, Birthday & Anniversary Reminders. It gives you a professional outlook of your business where you can view your Sales Breakdown and also Appointment distribution which gives details about your staff performance. Also highlights Customer Overview & Income- Expense Breakdown."/>

                            <br/><br/><br/><br/>

                            <FeatureDetailRight
                                image={Most_Sold_Services}
                                title="Most Sold Services"
                                desc=" It gives you an idea about the top 10 services sold during the month and revenue generated out of it."/>


                            <br/><br/><br/><br/>

                            <FeatureDetailLeft
                                image={Checkout_Details_Print_Receipt}
                                title="Checkout Details Print Receipt"
                                desc="This feature gives you detailed information about the service undertaken, price, discount and coupons If any and checkout option. After which you can print the receipt."/>


                        </div>


                        <div className="small_device hidden-lg-up">

                            <MFeatureDetailLeft
                                image={Dashboard_potrait}
                                title="Dashboard"
                                desc="The most important feature of any business is its sales & profit. This feature helps you to get an overall performance of a month. It gives you details about: Daily Appointments, Upcoming Appointments, Total Number of Appointments booked, No of Checkouts, Checkouts value, Birthday & Anniversary Reminders. It gives you a professional outlook of your business where you can view your Sales Breakdown and also Appointment distribution which gives details about your staff performance. Also highlights Customer Overview & Income- Expense Breakdown."/>

                            <hr className="newLine"/>

                            <MFeatureDetailRight
                                image={Most_Sold_Services}
                                title="Most Sold Services"
                                desc=" It gives you an idea about the top 10 services sold during the month and revenue generated out of it."/>

                            <hr className="newLine"/>

                            <MFeatureDetailLeft
                                image={Checkout_Details_Print_Receipt}
                                title="Checkout Details Print Receipt"
                                desc="This feature gives you detailed information about the service undertaken, price, discount and coupons If any and checkout option. After which you can print the receipt."/>


                        </div>


                    </div>
                </main>
            </div>
        );
    }
}

export default SalesReportFeatureDetails;