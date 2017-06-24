import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { Link, BrowserRouter } from 'react-router-dom';



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
                <h2>React Universal App 4521</h2>
                <button onClick={this.add}>{this.state.i}++</button>
                <Link to="/about" replace>About</Link>
            </div>
        );
    }
}
if(typeof window !== 'undefined') {
    ReactDOM.render(<AppRoot/>, document.getElementById('main'));
}