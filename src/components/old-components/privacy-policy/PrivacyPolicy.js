import React, {Component} from 'react';
import ReactGA from "react-ga";
import SmallHeader from "../common/SmallHeader";

class PrivacyPolicy extends Component {
    componentDidMount() {
        document.title = "Privacy Policy";
        window.scrollTo(0, 0);
        /* Adding Google Analytics */
        ReactGA.initialize('UA-115615990-1');
        ReactGA.pageview('/privacy-policy');
        /* ... */
    }

    render() {
        return (
            <main>
                <section className="hero_in restaurants">
                    <div className="wrapper">
                        <div className="container">
                            <h1 className="fadeInUp"><span/>Privacy Policy</h1>
                        </div>
                    </div>
                </section>

                <div className="container margin_80_55">
                    <SmallHeader title="Shapemore Privacy Policy"/>

                    <p>
                        Because Shapemore understands that the privacy of your personal information is important to you,
                        we have established privacy policies and practices. we respect your privacy and pledge to keep
                        your trust. The Privacy Policy describes our policies relating to the collection, use and
                        disclosure of information about your use of our services, including the application of the
                        telephone (the application of your salons), our website and any other services in your salons
                        provided through websites or mobile applications that guide you to the Privacy Policy. When you
                        enter the Statute, you agree to the terms and conditions of the Privacy Policy.
                    </p>


                    <SmallHeader title="Use of Personal Data"/>

                    <p>
                        Shapemore uses the personal data you provide in a manner that is consistent with this Privacy
                        Policy or with any applicable service-specific agreement. If you provide personal data for a
                        certain reason, we may use the personal data in connection with the reason for which it was
                        provided. For instance, we will use the personal data you input during the registration process
                        to administer access to the Services and, if applicable, publish information about Professionals
                        on the Website or Services. We may also use the information Professionals submit about Clients
                        or affiliated Professionals to send Clients and Professionals emails or SMS messages at such
                        Client's or Professional's direction via the Services. We may also contact Clients to tell them
                        about products and services that Professionals may offer and to further promote Professionals
                        and the Services. We may send Users marketing communications. We will give Users the opportunity
                        to opt out of receiving communications from Shapemore. Shapemore and its affiliates also use
                        Users' personal data and other personally non identifiable information collected through the
                        Services to help us improve the content and functionality of the Website and Services, to better
                        understand the Users of our Services, and to improve our Services.
                    </p>

                    <SmallHeader title="Third Party Personal Data"/>

                    <p>
                        We may also collect personal data from you about certain third parties (e.g., Professionals may
                        provide information about Clients, or Clients may provide information about Professionals), and
                        from certain third parties about you. We use this personal data that we collect in order to
                        provide and improve our Services, facilitate communication between you and such third parties,
                        and as otherwise set forth in this Privacy Policy, the End User License Agreement in mobile
                        applications, and in our Terms of Service. You warrant to Shapemore that any personal data you
                        provide us about any third party individuals was obtained by you with full consent from such
                        third party, and that such third party has not communicated to you that they wish to opt out of
                        receiving communication from Shapemore or having Shapemore collect information about such third
                        party.
                    </p>

                    <SmallHeader title="Log Data"/>


                    <p>
                        We may also collect information that your browser sends whenever you visit our Service ("Log
                        Data"). This Log Data may include information such as your computers Internet Protocol ("IP")
                        address, browser type, browser version, the pages of our Service that you visit, the time and
                        date of your visit, the time spent on those pages and other statistics.
                        In addition, we may use third party services such as Google Analytics that collect, monitor and
                        analyze this type of information in order to increase our Service’s functionality. These third
                        party service providers have their own privacy policies addressing how they use such
                        information.
                    </p>

                    <h3 className="privacy-heading">
                        Cookies
                    </h3>

                    <p>
                        Cookies are files with small amount of data, which may include an anonymous unique identifier.
                        Cookies are sent to your browser from a web site and stored on your computer’s hard drive.
                        We use "cookies" to collect information. You can instruct your browser to refuse all cookies or
                        to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be
                        able to use some portions of our Service.
                        We send a session cookie to your computer when you log in to your User account. This type of
                        cookie helps if you visit multiple pages on the Service during the same session, so that you
                        don’t need to enter your password on each page. Once you log out or close your browser, this
                        cookie expires.
                        We also use longer-lasting cookies for other purposes such as to display your Content and
                        account information. We encode our cookie so that only we can interpret the information stored
                        in them. Users always have the option of disabling cookies via their browser preferences. If you
                        disable cookies on your browser, please note that some parts of our Service may not function as
                        effectively or may be considerably slower.
                    </p>

                    <SmallHeader title="Sharing Information"/>

                    <p>
                        We use the information we collect from our Services to provide, maintain, protect and improve
                        them, to develop new services, and to protect Shapemore and our Users. We also use this
                        information to offer you tailored content – like giving you more relevant search results and
                        ads. We won't share Users' personal information with anyone except for the situations listed
                        below or unless we specifically inform you and give you an opportunity to opt out of our sharing
                        your personal information.
                    </p>

                    <SmallHeader title="We will not share your personal data"/>

                    <p>
                        To run interest-based advertising campaigns that collect personal data such as email addresses,
                        telephone numbers, and credit card numbers.
                        To use or associate personal data with remarketing lists, cookies, data feeds, or other
                        anonymous identifiers.
                        To use or associate targeting information, such as demographics or location, with any personal
                        data collected from the ad or its landing page.
                        To share any personal data with Google or third party companies through our remarketing tag or
                        any product data feeds which might be associated with our ads.
                        To send Google or third party companies precise location information without obtaining your
                        consent.
                    </p>

                    <SmallHeader title="Children"/>

                    <p>
                        Our Service does not address anyone under the age of 18 ("Children").
                        We do not knowingly collect personally identifiable information from children under 18. If you
                        are a parent or guardian and you are aware that your Children has provided us with Personal
                        Information, please contact us. If we become aware that we have collected Personal Information
                        from children under 18 without verification of parental consent, we take steps to remove that
                        information from our servers or replace it with the Personal Information of the Children’s
                        parent or guardian.
                    </p>

                    <SmallHeader title="Links to Other Websites"/>

                    <p>
                        This Privacy Policy does not address, and we are not responsible for, the privacy, information
                        or other practices of any third parties, including our Subscribers and any third party operating
                        any Third Party Offering, site or other products and services used in connection with the
                        Shapemore Services. The inclusion of a link does not imply endorsement of the linked site or
                        service by us or by our affiliates.
                        Please note that we are not responsible for the collection, usage and disclosure policies and
                        practices (including the data security practices) of other organizations, such as Facebook,
                        Apple, Google, Microsoft, RIM or any other app developer, app provider, social media platform
                        provider, operating system provider, wireless service provider or device manufacturer, including
                        any Personal Information you disclose to other organizations through or in connection with the
                        Shapemore Services.
                        Security of Your Information.
                        We take precautions to ensure the security of your information. However, we cannot guarantee
                        that hackers or unauthorized personnel will not gain access to your personal information despite
                        our efforts. You should note that in using the Website and our related Services, this
                        information will travel through third party infrastructures which are not under our control.
                        We cannot protect, nor does this Privacy Policy apply to, any information that you transmit to
                        other Users of the Website. You should never transmit personal or identifying information to
                        other Users. If you suspect someone is trying to obtain your personal data by impersonating us
                        or misleading you or other members of our community about such person's relationship to us or to
                        our Services, please contact us at info@Shapemore.com.
                    </p>

                    <SmallHeader title="Changes To This Privacy Policy"/>

                    <p>
                        We may update our Privacy Policy from time to time. We will notify you of any changes by posting
                        the new Privacy Policy on this page.
                        You are advised to review this Privacy Policy periodically for any changes. Changes to this
                        Privacy Policy are effective when they are posted on this page.
                        If we make any material changes to this Privacy Policy, we will notify you either through the
                        email address you have provided us, or by placing a prominent notice on our website.
                    </p>


                    <SmallHeader title="Contact Us"/>

                    <p>
                        If you have any questions regarding this Privacy Policy you can contact us via email at
                        info@Shapemore.com.
                    </p>

                </div>


            </main>
        );
    }
}

export default PrivacyPolicy;