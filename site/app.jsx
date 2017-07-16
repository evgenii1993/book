import React, {Component, PropTypes}    from 'react';
import ReactDOM                         from 'react-dom';
import { Link }                         from 'react-router-dom';
import {ClientRoutes}                   from '../routes/clientRoutes';
import Dialog                           from './components/Dialog/Dialog';
import Form                             from './components/Form/Form';
import string                           from "./language/language";
export default class AppRoot extends Component {
    render() {
        let structureForm = [
            {
                type: 'input',
                name: 'email',
                label: "E-mail: "
            }
        ];
        return (
            <div className="preview">
                <div className="site-wrapper">

                    <div className="site-wrapper-inner">

                        <div className="cover-container">

                            <div className="masthead clearfix">
                                <div className="inner">
                                    <h3 className="masthead-brand">Cover</h3>
                                    <ul className="nav masthead-nav">
                                        <li className="active"><a href="#">Home</a></li>
                                        <li><a href="#">Features</a></li>
                                        <li><a href="#">Contact</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="inner cover">
                                <h1 className="cover-heading">{string.preview_title}</h1>
                                <p className="lead">
                                    {string.preview_text}
                                </p>
                                <p className="lead">
                                    <Link className="btn btn-lg btn-default" to="/app">Learn more</Link>
                                </p>
                                <p className="lead">
                                    <a  className="btn btn-lg btn-default"
                                        onClick={()=>{this.refs.preview_dialog.show()}} href="javascript:void(0)">
                                        {string.open_form_preview}
                                    </a>
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
                <Dialog ref='preview_dialog' bg={true}>
                    <Form structure={structureForm}/>
                </Dialog>
            </div>
        );
    }
}
if(typeof window !== 'undefined') {
    ReactDOM.render(
        <ClientRoutes />,
        document.getElementById('main')
    );
}