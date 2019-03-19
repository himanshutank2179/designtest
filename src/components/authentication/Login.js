import React, {Component} from 'react';
import {Link} from "react-router-dom";
import ReactWOW from 'react-wow'
import logo_sticky from '../../img/logo_sticky.png'
import google_plus_icon from '../../img/google-icon.png'
import $ from 'jquery'
import './login.scss'
import LoginInput from "../common/LoginInput";

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            mobile: '',
            email: '',
            password: '',
            errors: {}
        }
    }


    componentDidMount() {
        document.body.style.background = '#fbfbfb';
        document.body.style.display = 'flex';
        document.body.style.justifyContent = 'center';
        document.body.style.alignItems = 'center';
        document.body.style.flexDirection = 'column';
        document.body.style.height = '100vh';
        document.body.style.overflow = 'hidden';

        /*$("#signup").click(function () {
            $(".message").css("transform", "translateX(100%)");
            if ($(".message").hasClass("login")) {
                $(".message").removeClass("login");
            }
            $(".message").addClass("signup");
        });

        $("#login").click(function () {
            $(".message").css("transform", "translateX(0)");
            if ($(".message").hasClass("login")) {
                $(".message").removeClass("signup");
            }
            $(".message").addClass("login");
        });*/

        $("#mobile_singin").click(function () {
            $(".mobileSignUp").hide();
            $(".mobileSignIn").fadeIn(1000);
        });

        $("#mobile_signup").click(function () {
            $(".mobileSignIn").hide();
            $(".mobileSignUp").fadeIn(1000);
        });

    }

    swipeToLogin = () => {
        this.clearFields();
        $(".message").css("transform", "translateX(0)");
        if ($(".message").hasClass("login")) {
            $(".message").removeClass("signup");
        }
        $(".message").addClass("login");
    }

    swipeToRegiter = () => {
        this.clearFields();
        $(".message").css("transform", "translateX(100%)");
        if ($(".message").hasClass("login")) {
            $(".message").removeClass("login");
        }
        $(".message").addClass("signup");
    }

    swipeToLoginMobile = () => {
        this.clearFields();
        $(".mobileSignUp").hide();
        $(".mobileSignIn").fadeIn(1000);
    }

    swipeToRegiterMobile = () => {
        this.clearFields();
        $(".mobileSignIn").hide();
        $(".mobileSignUp").fadeIn(1000);
    }

    onChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleRegisterValidation() {
        let fields = this.state;
        let errors = {};
        let formIsValid = true;

        // First Name
        if (!fields.first_name) {
            formIsValid = false;
            errors.first_name = "First Name Required!";
        }
        // Ends

        // Last Name
        if (!fields.last_name) {
            formIsValid = false;
            errors.last_name = "Last Name Required!";
        }
        // Ends

        // Mobile Name
        if (!fields.mobile) {
            formIsValid = false;
            errors.mobile = "Mobile Required!";
        }

        if (fields.mobile) {
            if (!fields.mobile.match(/^[0-9+]+$/)) {
                formIsValid = false;
                errors.mobile = "Please Enter Numbers only";
            }
        }

        // Ends

        // Email
        if (!fields.email) {
            formIsValid = false;
            errors.email = "Email Required!";
        }

        if (fields.email) {
            let lastAtPos = fields.email.lastIndexOf('@');
            let lastDotPos = fields.email.lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields.email.indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
                formIsValid = false;
                errors.email = "Email is not valid";
            }
        }
        // Ends

        // Password
        if (!fields.password) {
            formIsValid = false;
            errors.password = "Password Required!";
        }
        // Ends

        this.setState({errors: errors});
        return formIsValid;
    }

    onSubmit = e => {
        e.preventDefault();

        if (this.handleRegisterValidation()) {

            this.clearFields()

        }
    }


    handleLoginValidation() {
        let fields = this.state;
        let errors = {};
        let formIsValid = true;


        // Email
        if (!fields.email) {
            formIsValid = false;
            errors.email = "Email Required!";
        }

        if (fields.email) {
            let lastAtPos = fields.email.lastIndexOf('@');
            let lastDotPos = fields.email.lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields.email.indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
                formIsValid = false;
                errors.email = "Email is not valid";
            }
        }
        // Ends

        // Password
        if (!fields.password) {
            formIsValid = false;
            errors.password = "Password Required!";
        }
        // Ends

        this.setState({errors: errors});
        return formIsValid;
    }

    onLoginSubmit = e => {
        e.preventDefault();

        if (this.handleLoginValidation()) {

            this.setState({
                email: '',
                password: '',
                errors: {}
            })

        }
    }

    clearFields() {
        this.setState({
            first_name: '',
            last_name: '',
            mobile: '',
            email: '',
            password: '',
            errors: {}
        });
    }


    render() {
        const {errors} = this.state;
        return (
            <div className="login-container">
                <ReactWOW animation='slideInDown'>
                    <div className="large-device-design hidden-sm-down">
                        <div className="auth-container">
                            <div className="message signup">
                                {/*<div className="btn-wrapper">
                                    <button className="button" id="signup">Sign Up</button>
                                    <button className="button" id="login">Sign In</button>
                                </div>*/}
                            </div>

                            <div className="form form--signup">
                                <img src={logo_sticky}/>
                                <p>&nbsp;</p>
                                <form className={'auth-form'} autoComplete="off" noValidate={true} onSubmit={this.onSubmit}>

                                    <div className="text-center mb-4">
                                        <Link to="#0" className="social-fb-button">
                                            <i className="icon-facebook"/> Facebook
                                        </Link>
                                        <Link to="#0" className="social-gplus-button">
                                            <img width={22} src={google_plus_icon}/> &nbsp; Google
                                        </Link>
                                    </div>

                                    {/*<div className="access_social">
                                    <div className='icon social fb'>
                                        <i className="ti-facebook"/>
                                    </div>
                                    <div className='icon social gplus'>
                                        <i className="ti-google"/>
                                    </div>
                                </div>*/}

                                    <div className="divider"><span>Or</span></div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <LoginInput
                                                placeholder="First Name"
                                                id="first_name"
                                                icon="ti-user"
                                                name="first_name"
                                                onChange={this.onChange}
                                                value={this.state.first_name}
                                                error={errors.first_name}
                                            />

                                        </div>
                                        <div className="col-md-6">

                                            <LoginInput
                                                placeholder="Last Name"
                                                id="last_name"
                                                icon="ti-user"
                                                name="last_name"
                                                onChange={this.onChange}
                                                value={this.state.last_name}
                                                error={errors.last_name}
                                            />
                                        </div>
                                    </div>


                                    <LoginInput
                                        placeholder="Mobile"
                                        id="mobile"
                                        icon="ti-user"
                                        name="mobile"
                                        onChange={this.onChange}
                                        value={this.state.mobile}
                                        error={errors.mobile}
                                    />

                                    <LoginInput
                                        placeholder="Email"
                                        id="email"
                                        icon="icon_mail_alt"
                                        name="email"
                                        onChange={this.onChange}
                                        value={this.state.email}
                                        error={errors.email}
                                    />

                                    <LoginInput
                                        placeholder="Password"
                                        id="password"
                                        icon="icon_lock_alt"
                                        name="password"
                                        onChange={this.onChange}
                                        value={this.state.password}
                                        error={errors.password}
                                    />

                                    <button className="button">Create My Account</button>
                                    <div className="text-center add_top_10">Already have an account? <span
                                        className="make-like-link" id="login"
                                        onClick={this.swipeToLogin}>Sign In!</span>
                                    </div>
                                </form>
                            </div>
                            <div className="form form--login">

                                <img src={logo_sticky}/>
                                <p>&nbsp;</p>
                                <form className={'auth-form'} autoComplete="off" noValidate={true} onSubmit={this.onLoginSubmit}>

                                    <div className="text-center mb-4">
                                        <Link to="#0" className="social-fb-button">
                                            <i className="icon-facebook"/> Facebook
                                        </Link>
                                        <Link to="#0" className="social-gplus-button">
                                            <img width={22} src={google_plus_icon}/> &nbsp; Google
                                        </Link>
                                    </div>

                                    {/*<div className="access_social">
                                    <div className='icon social fb'>
                                        <i className="ti-facebook"/>
                                    </div>
                                    <div className='icon social gplus'>
                                        <i className="ti-google"/>
                                    </div>
                                </div>*/}

                                    <div className="divider"><span>Or</span></div>


                                    <LoginInput
                                        placeholder="Email"
                                        id="login_email"
                                        icon="icon_mail_alt"
                                        name="email"
                                        onChange={this.onChange}
                                        value={this.state.email}
                                        error={errors.email}
                                    />

                                    <LoginInput
                                        placeholder="Password"
                                        id="login_password"
                                        icon="icon_lock_alt"
                                        name="password"
                                        onChange={this.onChange}
                                        value={this.state.password}
                                        error={errors.password}
                                        type="password"
                                    />

                                    <div className="desktop-remember-me clearfix add_bottom_30">
                                        <div className="checkboxes float-left">
                                            <label className="container_check">Remember me
                                                <input type="checkbox"/>
                                                <span className="checkmark"/>
                                            </label>
                                        </div>
                                        <div className="float-right mt-1"><Link to="/">Forgot
                                            Password?</Link></div>
                                    </div>

                                    <button className="button">Login To Shapemore</button>
                                    <div className="text-center add_top_10">New to Shapemore? <strong>
                                        <span className="make-like-link" id="login"
                                              onClick={this.swipeToRegiter}>Sign Up!</span>
                                    </strong>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="text-center mt-3">
                            <Link to="/">Privacy Policy</Link> and <Link to="/"> Terms and conditions</Link> <br/>
                            © 2019 Shapemore Technologies Pvt.Ltd
                        </div>
                    </div>
                </ReactWOW>
                <ReactWOW animation='slideInDown'>
                    <div className="small-device-design hidden-md-up mt-4">

                        <div id="login" className="mobileSignIn form form--signup mt-5">
                            <aside>
                                <figure>
                                    <Link to="index.html"><img src={logo_sticky} width={200} data-retina="true"
                                                               alt className="logo_sticky"/></Link>
                                </figure>
                                <form className={'auth-form'} autoComplete="off" noValidate={true} onSubmit={this.onLoginSubmit}>
                                    <div className="row text-center">
                                        <Link to="#0" className="social-btn btn_1 fb-color rounded float-left">
                                            <i className="icon-facebook"/> Facebook
                                        </Link>
                                        <Link to="#0" className="social-btn btn_1 rounded float-right google-color">
                                            <img width={22} src={google_plus_icon}/> &nbsp; Google
                                        </Link>
                                    </div>
                                    <div className="divider"><span>Or</span></div>

                                    <div className="form-group">
                                        {/*<label>Email</label>
                                    <input type="email" className="form-control" name="email" id="email"/>
                                    <i className="icon_mail_alt"/>*/}

                                        <LoginInput
                                            placeholder="Email"
                                            id="mobile_login_email"
                                            icon="icon_mail_alt"
                                            name="email"
                                            onChange={this.onChange}
                                            value={this.state.email}
                                            error={errors.email}
                                        />

                                    </div>

                                    <div className="form-group">
                                        <LoginInput
                                            placeholder="Password"
                                            id="mobile_login_password"
                                            icon="icon_lock_alt"
                                            name="password"
                                            onChange={this.onChange}
                                            value={this.state.password}
                                            error={errors.password}
                                            type="password"
                                        />
                                    </div>

                                    {/*<div className="form-group">*/}
                                    {/*<label>Password</label>*/}
                                    {/*<input type="password" className="form-control" name="password" id="password"*/}
                                    {/*defaultValue/>*/}
                                    {/*<i className="icon_lock_alt"/>*/}
                                    {/*</div>*/}

                                    <div className="clearfix add_bottom_30">
                                        <div className="checkboxes float-left">
                                            <label className="container_check">Remember me
                                                <input type="checkbox"/>
                                                <span className="checkmark"/>
                                            </label>
                                        </div>
                                        <div className="float-right mt-1"><Link to="/">Forgot
                                            Password?</Link></div>
                                    </div>

                                    <div className="form-group">
                                        <button className="btn_1 rounded full-width">Login To Shapemore</button>
                                    </div>
                                    <div className="text-center add_top_10">New to Shapemore? <strong>
                                        <span id="mobile_signup">Sign up!</span>
                                    </strong>
                                    </div>
                                    <div className="text-center">
                                        <Link to="/">Privacy Policy</Link> and <Link to="/"> Terms and conditions</Link>
                                        <br/>
                                        © 2019 Shapemore Technologies Pvt.Ltd
                                    </div>
                                </form>

                            </aside>
                        </div>

                        <div id="register" className="mobileSignUp form form--signup mt-5">

                            <aside>
                                <figure>
                                    <Link to="index.html"><img src={logo_sticky} width={200} data-retina="true"
                                                               alt className="logo_sticky"/></Link>
                                </figure>
                                <form className={'auth-form'} autoComplete="off" noValidate={true} onSubmit={this.onSubmit}>
                                    <div className="row text-center">
                                        <Link to="#0" className="social-btn btn_1 fb-color rounded float-left">
                                            <i className="icon-facebook"/> Facebook
                                        </Link>
                                        <Link to="#0" className="social-btn btn_1 rounded float-right google-color">
                                            <img width={22} src={google_plus_icon}/> &nbsp; Google
                                        </Link>
                                    </div>
                                    <div className="divider"><span>Or</span></div>

                                    <div className="form-group">
                                        <LoginInput
                                            placeholder="First Name"
                                            id="mobile_reg_first_name"
                                            icon="ti-user"
                                            name="first_name"
                                            onChange={this.onChange}
                                            value={this.state.first_name}
                                            error={errors.first_name}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <LoginInput
                                            placeholder="Last Name"
                                            id="mobile_reg_last_name"
                                            icon="ti-user"
                                            name="last_name"
                                            onChange={this.onChange}
                                            value={this.state.last_name}
                                            error={errors.last_name}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <LoginInput
                                            placeholder="Mobile"
                                            id="mobile_reg_mobile"
                                            icon="ti-user"
                                            name="mobile"
                                            onChange={this.onChange}
                                            value={this.state.mobile}
                                            error={errors.mobile}
                                        />
                                    </div>


                                    <div className="form-group">
                                        <LoginInput
                                            placeholder="Email"
                                            id="mobile_reg_email"
                                            icon="icon_mail_alt"
                                            name="email"
                                            onChange={this.onChange}
                                            value={this.state.email}
                                            error={errors.email}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <LoginInput
                                            placeholder="Password"
                                            id="mobile_reg_password"
                                            icon="icon_lock_alt"
                                            name="password"
                                            onChange={this.onChange}
                                            value={this.state.password}
                                            error={errors.password}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <button className="btn_1 rounded full-width">Create My Account</button>
                                    </div>
                                    <div className="text-center add_top_10">Already have an account? <strong>
                                        <span id="mobile_singin">Sign In!</span>
                                    </strong>
                                    </div>
                                    <div className="text-center">
                                        <Link to="/">Privacy Policy</Link> and <Link to="/"> Terms and conditions</Link>
                                        <br/>
                                        © 2019 Shapemore Technologies Pvt.Ltd
                                    </div>
                                </form>

                            </aside>

                        </div>


                    </div>
                </ReactWOW>
            </div>
        );
    }
}

export default Login;