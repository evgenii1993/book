import React, {Component, PropTypes}    from 'react';
import { Link }                         from 'react-router-dom';
import string                           from "../../language/language";
import { connect }                      from 'react-redux';

class Contact extends Component {
    state = {};
    render() {
        console.log(this);
        return (
            <div className="contact">
                <div className="site-wrapper">

                    <div className="site-wrapper-inner">

                        <div className="cover-container">

                            <div className="masthead clearfix">
                                <div className="inner">
                                    <h3 className="masthead-brand">Cover</h3>
                                    <ul className="nav masthead-nav">
                                        <li className="active"><Link to="/">Home</Link></li>
                                        <li><Link to="/contact/">Contact</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="inner cover">
                                <h1 className="cover-heading">{string.preview_title}</h1>
                                <p className="lead">
                                    {string.preview_text}
                                </p>
                                <p className="lead">
                                    <Link className="btn btn-lg btn-default" to="/app/">Learn more</Link>
                                </p>
                            </div>

                            <div className="mastfoot">
                                <div className="inner">
                                    <p>Cover template for <a href="http://getbootstrap.com">Bootstrap</a>, by <a href="https://twitter.com/mdo">@mdo</a>.</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
export default connect(
    state => ({
        testStore: state
    }),
    dispatch => ({})
)(Contact);