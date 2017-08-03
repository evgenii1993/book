import React, {Component}    from 'react';
import { Link }              from 'react-router-dom';


class Test extends Component {
    state = {
        i: 0
    };


    render() {

        return (
            <div>
                <h2>React Universal App</h2>
                <Link to="/">main</Link>
            </div>
        );
    }
}
