import React, {Component} from 'react';
import ReactGA from "react-ga";
import SmallHeader from "../common/SmallHeader";

class TermsAndConditions extends Component {
    componentDidMount() {
        document.title = "Terms & Conditions";
        window.scrollTo(0, 0);
        /* Adding Google Analytics */
        ReactGA.initialize('UA-115615990-1');
        ReactGA.pageview('/terms-and-conditions');
        /* ... */
    }

    render() {
        return (
            <main>
                <section className="hero_in restaurants">
                    <div className="wrapper">
                        <div className="container">
                            <h1 className="fadeInUp"><span/>Terms & Conditions</h1>
                        </div>
                    </div>
                </section>

                <div className="container margin_80_55">

                    <SmallHeader title="Terms of Service for Professionals"/>

                    <p>Welcome to Shapemore, the online booking solution for Beauty and Wellness industry. Shapemore
                        aims to provide businesses with the most robust and easy-to-use online business tools,
                        empowering them to efficiently grow their business, and build long-lasting relationships with
                        customers.</p>


                    <p>These Terms of Service (the "Terms of Service") govern the use of the mobile and internet-based
                        services, business tools offered by Shapemore, llp. (the "Company," "Shapemore," "we" or "us")
                        at and through the website Shapemore.com (the "Website") and through mobile applications (such
                        services, applications and the Website are collectively referred to as the "Services").</p>

                    <p>PLEASE READ THESE TERMS OF SERVICE CAREFULLY. THIS IS A LEGAL AGREEMENT BETWEEN SHAPEMORE AND YOU
                        WHICH GOVERNS YOUR USE OF THE SERVICES. BY EXECUTING A SUBSCRIPTION AGREEMENT, AND/OR YOUR USE
                        OF THE SERVICES CONSTITUTES YOUR ACCEPTANCE OF AND AGREEMENT TO ALL OF THE TERMS AND CONDITIONS
                        IN THESE TERMS OF SERVICE AND YOUR REPRESENTATION THAT YOU ARE 18 YEARS OF AGE OR OLDER. IF YOU
                        OBJECT TO ANYTHING IN THESE TERMS OF SERVICE YOU ARE NOT PERMITTED TO USE THE SERVICES.</p>

                    <p>If you are accepting these Terms of Service and using the Services on behalf of a company,
                        organization, government, or other legal entity, you represent and warrant to the Company that
                        you have full power and authority to do so.</p>

                    <p>The Services are protected by copyright laws, as well as other intellectual property laws and
                        treaties. Unauthorized reproduction or distribution of the Services, or any portion of them, may
                        result in severe civil and criminal penalties, and will be prosecuted to the maximum extent
                        possible under the law. The Services are licensed, not sold.</p>

                    <SmallHeader title="Accuracy of Information"/>


                    <p>Although Shapemore webmaster updates information on the Site periodically, Shapemore does not
                        offer assurance that the information or material is error-free or complete. Such updates include
                        but are not limited to availability and price. Shapemore reserves the right to revise or change
                        information without prior notice. Although we apologize for the inconvenience, Shapemore
                        reserves the right to correct any information at any time, even during User transactions, and
                        will take measures that may include refusal, cancellation, or revision to adjust Users final
                        payment. All prices are available for limited time only, and Shapemore reserves the right to
                        change any price without notice. Current promotions, sales, and discounts are not valid towards
                        previously purchased service.</p>

                    <SmallHeader title="The Shapemore Services"/>

                    <p>Shapemore is a platform that connects salons, stylists and Professionals providing hair, beauty
                        and other health and wellness services ("Styling Services") with clients seeking such services
                        ("Clients"). The Professionals and Clients are both users of the Services provided by Shapemore
                        and are hereinafter referred to collectively as "Users."</p>

                    <SmallHeader title="Fees and Payment"/>


                    <p>You agree to pay Shapemore the Subscription Fees, and any other applicable fees as may be agreed
                        to by you. All fees are non-refundable and non-transferable except for as expressly provided in
                        these Terms of Service. Unless otherwise stated, fees must be paid in advance of each billing
                        period.
                        Your Subscription starts on the date that you sign up for a Subscription and submit payment.
                        Unless otherwise communicated to you at the time of sign up, each Subscription cycle is
                        one-month in length ("Subscription Period"), and will renew on a monthly basis until we
                        terminate the Subscription, or you notify us via the Services or by email to
                        cancelsubscription@shapemore.com of your decision to terminate your current Subscription. Unless
                        otherwise communicated to you, you will be billed on the monthly anniversary of first submitting
                        payment to us for your Subscription (e.g., if your Subscription begins on march 25th, it will
                        renew on April 25th, May 25th, and so on. If your Subscription begins on a date that doesn't
                        occur every billing cycle (e.g., the 31st), you will be billed on the last day of every month.
                        We reserve the right to change the timing of our billing. You acknowledge that the amount billed
                        to you each month may vary due to promotional offers and/or adding or changing your Subscription
                        plan, and you authorize Shapemore to charge you for these varying amounts as necessary.</p>

                    <SmallHeader title="Subscription Pricing"/>


                    <p>We reserve the right to adjust pricing for the Subscription Services at any time upon fourteen
                        (14) days prior notice. Unless we expressly communicated otherwise, any price change to your
                        membership will take effect on your next billing cycle. You must agree to the change in fees to
                        continue to use the Services. To withdraw your consent, you will need to cancel your account by
                        logging into your account and following the cancellation procedures there, or notifying us at
                        cancelsubscription@shapemore.com</p>

                    <SmallHeader title="Termination"/>


                    <p>Shapemore reserves the right, in its sole discretion, to terminate any User account and any User
                        Submissions, and restrict User's access to all or any part of the Site for any or no reason,
                        without notice, and without liability to any User or anyone else. These Terms of Use are
                        applicable to any User who accesses, registers, or purchases anything on the Site. The terms of
                        Termination; Indemnity; Copyright and Trademark Disclaimer; Limitation of Liability and
                        Disclaimer of Warranties; and Governing Law sections will survive any termination of service or
                        use of the Site.</p>

                    <SmallHeader title="Copyright and Trademark Disclaimer"/>


                    <p>The Site is owned by Shapemore and is available for Users personal and non-commercial purposes
                        only. The Shapemore name, logo, and site content, including all pictures, slogans, text, colors,
                        designs, graphics, images, icons, buttons, code, and software, are all subject to trademark,
                        copyright, and other applicable intellectual property rights and law. Shapemore trademarks may
                        not be copied, reproduced, modified, downloaded, published, exploited, or transmitted without
                        first obtaining written permission from Shapemore. User warrants that he or she owns all rights
                        in any User Submissions posted to the Site. User agrees not to post, modify, distribute, or
                        reproduce User Submissions that belong to another person, without first obtaining the owner's
                        permission to post such User Submissions and grant to Shapemore all of the license rights
                        granted in this Agreement.</p>

                    <SmallHeader title="Governing Law"/>

                    <p>The Site is controlled and operated by Shapemore. Shapemore makes no claim that the Site, its
                        services, are appropriate or accessible to other locations. User accesses the Site on her/his
                        own initiative, accepts and agrees to be bound by the terms of the Agreement and the Privacy
                        Policy. This agreement shall be governed by the India laws of the without giving effect to its
                        conflicts of law principles.The provisions of this Agreement will be deemed severable, and the
                        invalidity or unenforceability of any provision will not affect the validity or enforceability
                        of any other provision.</p>
                </div>


            </main>
        );
    }
}

export default TermsAndConditions;