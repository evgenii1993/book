import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import {ClientRoutes} from '../routes/clientRoutes';


export default class AppRoot extends Component {
    state = {
        i: 0
    };
    add = () =>{
        this.setState({
            t: this.state.i++
        });
    };

    render() {
        return (
            <div>
                <h2>React Universal App</h2>
                <button onClick={this.add}>{this.state.i}++</button>
                <Link to="/about">About</Link>
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