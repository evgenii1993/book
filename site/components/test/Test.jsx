import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router-dom';



export default class Test extends Component {
    state = {
        i: 0
    };
    add = () =>{
        this.setState({
            t: this.state.i--
        });
    };

    render() {
        return (
            <div>
                <h2>React Universal App</h2>
                <button onClick={this.add}>{this.state.i}--</button>
                <Link to="/">main</Link>
            </div>
        );
    }
}