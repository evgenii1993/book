import React, {Component}    from 'react';
import { Link }              from 'react-router-dom';
import { connect }           from 'react-redux';


class Preview extends Component {
    state = {
        i: 0
    };
    componentDidMount(){
        this.props.show();
    }
    add = () =>{
        this.setState({
            t: this.state.i--
        });
        this.props.add();
    };

    render() {

        console.log("test:", this.props.testStore);

        return (
            <div>
                <h2>React Universal App</h2>
                <button onClick={this.add}>{this.state.i}--</button>
                <Link to="/">main</Link>
                <h3>List Store:</h3>
                <ul>
                    {this.props.testStore.map((item, key)=>{
                        return <ul key={key}>{item}</ul>
                    })}
                </ul>
            </div>
        );
    }
}

export default connect(
    state => ({
        testStore: state
    }),
    dispatch => ({
        add: (name) => {
            dispatch({
                type: "ADD",
                reyload: "simple1"
            });
        },
        show: () => {
            dispatch({
                type: "READY"
            });
        }
    })
)(Preview);