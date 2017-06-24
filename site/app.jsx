import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { connect }             from 'react-redux';

@connect(state => ({
    //meta:   state.meta,
    staff:   state.staff,
    news:   state.news,
    site:   state.site,
    reviews:state.reviews,
    price:  state.price,
    offers: state.offers
}))
class AppRoot extends Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired
    };
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
            </div>
        );
    }
}
if(typeof window !== 'undefined') {
    ReactDOM.render(<AppRoot dispatch=""/>, document.getElementById('main'));
}

export default AppRoot;