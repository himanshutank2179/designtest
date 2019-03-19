import React, {Component} from 'react';
import ReactGA from "react-ga";
import '../../css/contact.scss';
import axios from 'axios';
import Alert from "../common/Alert";

class Contact extends Component {

    constructor(props) {
        super(props);

        this.state = {
            fields: {
                name: '',
                email: '',
                phone: '',
                business_name: '',
                message: ''
            },
            errors: {},
            isMessageSent: false,
            loading: false
        };

        this.contactSubmit = this.contactSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        document.title = "Contact Us";
        ReactGA.initialize('UA-115615990-1');
        ReactGA.pageview('/contact');
    }

    handleValidation() {
        console.log('handleValidation called');
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        console.log('Fields - ', fields);

        //Name
        if (!fields["name"]) {
            formIsValid = false;
            errors["name"] = "This field cannot be empty";
        }

        if (typeof fields["name"] !== "undefined") {
            if (!fields["name"].match(/^[a-zA-Z]+$/)) {
                formIsValid = false;
                errors["name"] = "This field allow only letters";
            }
        }

        //Email
        if (!fields["email"]) {
            formIsValid = false;
            errors["email"] = "This field cannot be empty";
        }

        if (typeof fields["email"] !== "undefined") {
            let lastAtPos = fields["email"].lastIndexOf('@');
            let lastDotPos = fields["email"].lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
                formIsValid = false;
                errors["email"] = "Email is not valid";
            }
        }

        //Phone
        if (!fields["phone"]) {
            formIsValid = false;
            errors["phone"] = "This field cannot be empty";
        }

        if (typeof fields["phone"] !== "undefined") {
            if (!fields["phone"].match(/^[0-9+]+$/)) {
                formIsValid = false;
                errors["phone"] = "This field allow only Numbers";
            }
        }

        //Business
        if (!fields["business_name"]) {
            formIsValid = false;
            errors["business_name"] = "This field cannot be empty";
        }

        //Message
        if (!fields["message"]) {
            formIsValid = false;
            errors["message"] = "This field cannot be empty";
        }

        this.setState({errors: errors});
        return formIsValid;
    }

    contactSubmit(e) {
        e.preventDefault();

        if (this.handleValidation()) {

            this.setState({loading: true});

            const API_PATH = 'https://dev.shapemore.com/ws/contact-request';
            axios({
                method: 'get',
                url: `${API_PATH}`,
                headers: {'content-type': 'application/json'},
                params: {
                    name: this.state.fields.name,
                    email: this.state.fields.name,
                    mobile: this.state.fields.phone,
                    message: this.state.fields.message,
                    business_name: this.state.fields.business_name,

                }
            })
                .then(result => {
                    this.setState({
                        fields: {
                            name: '',
                            email: '',
                            phone: '',
                            business_name: '',
                            message: ''
                        },
                        isMessageSent: true,
                        loading: false
                    })
                })
                .catch(error => this.setState({error: error.message}));


            console.log('submit success - ', this.state.fields);
        } else {

        }

    }

    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({fields});
    }

    render() {
        return (
            <main>
                <section className="hero_in contact">
                    <div className="wrapper">
                        <div className="container">
                            <h1 className="fadeInUp"><span/>Contact</h1>
                        </div>
                    </div>
                </section>

                <div className="contact_info">
                    <div className="container">
                        <ul className="clearfix">
                            {/*<li>
                                <i className="pe-7s-map-marker"/>
                                <h4>Address</h4>
                                <span>PO Box 97845 Baker st. 567, Los Angeles<br/>California - US.</span>
                            </li>*/}
                            <li>
                                <i className="pe-7s-mail-open-file"/>
                                <h4>Email</h4>
                                <span>support@shapemore.com<br/>sales@shapemore.com<br/></span>
                            </li>
                            <li>
                                <i className="pe-7s-phone"/>
                                <h4>Contacts info</h4>
                                <span>+91 7698585041</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="bg_color_1">
                    <div className="container margin_80_55">
                        <div className="row justify-content-between">
                            <div className="col-lg-6 contact-form">
                                <h4>Send a message</h4>
                                {this.state.isMessageSent ?
                                    <Alert title="Message has been sent, we will get back to you in 24 hours."/> : null}

                                <div id="message-contact"/>
                                <form autoComplete="off" onSubmit={this.contactSubmit.bind(this)}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Name</label>
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    id="name"
                                                    ref="name"
                                                    onChange={this.handleChange.bind(this, "name")}
                                                    value={this.state.fields.name}
                                                />
                                                <span style={{color: "red"}}>{this.state.errors["name"]}</span>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Email</label>
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    id="email"
                                                    name="email"
                                                    onChange={this.handleChange.bind(this, "email")}
                                                    value={this.state.fields.email}
                                                />
                                                <span style={{color: "red"}}>{this.state.errors["email"]}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">

                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Mobile</label>
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    id="phone"
                                                    name="phone"
                                                    onChange={this.handleChange.bind(this, "phone")}
                                                    value={this.state.fields.phone}
                                                />
                                                <span style={{color: "red"}}>{this.state.errors["phone"]}</span>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Business Name</label>
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    id="business_name"
                                                    name="business_name"
                                                    onChange={this.handleChange.bind(this, "business_name")}
                                                    value={this.state.fields.business_name}
                                                />
                                                <span style={{color: "red"}}>{this.state.errors["business_name"]}</span>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="form-group">
                                        <label>Message</label>
                                        <textarea
                                            className="form-control"
                                            id="message"
                                            name="message"
                                            style={{height: '150px'}}
                                            defaultValue={""}
                                            onChange={this.handleChange.bind(this, "message")}
                                            value={this.state.fields.message}
                                        />
                                        <span style={{color: "red"}}>{this.state.errors["message"]}</span>
                                    </div>
                                    <p className="add_top_30">
                                        {
                                            this.state.loading ?
                                                <button className="btn_1 rounded" id="submit-contact"
                                                        value="Submit">Please wait...
                                                </button> : <button className="btn_1 rounded" id="submit-contact"
                                                                    value="Submit">Send
                                                    Message
                                                </button>
                                        }

                                    </p>
                                </form>
                            </div>
                        </div>

                    </div>

                </div>


            </main>
        );
    }
}

export default Contact;