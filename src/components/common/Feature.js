import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Feature extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {url, icon, title, subTitle} = this.props;
        return (
            <div className="col-lg-4 col-md-6">
                <Link className="box_topic" to={url}>

                    <i className={icon}/>

                    <h3>{title}</h3>
                    <p>
                        {subTitle}
                    </p>

                    {url !== undefined && url.length > 0 ? <h6 className="feature-read-more">Read More</h6> : null}


                </Link>
            </div>
        );
    }
}

export default Feature;