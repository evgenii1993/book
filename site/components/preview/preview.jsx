import React, {Component}    from 'react';
import { Link }              from 'react-router-dom';
import { connect }           from 'react-redux';
import { show, add }         from '../../Actions/actionsPreview';


class Preview extends Component {
    state = {
        i: 0
    };
    // componentDidMount(){
    //     this.props.show();
    // }
    add = () =>{
        // this.setState({
        //     t: this.state.i--
        // });
        this.props.add();
    };

    render() {
        let {preview} = this.props;
        return (
            <div>
                <h2>React Universal App</h2>
                <button onClick={this.add}>{this.state.i}</button>
                <Link to="/">main</Link>
                <Link to="/panel/">/panel/</Link>
                <h3>List Store:</h3>
                <ul>
                    {preview.test.map((item, key)=>{
                        return <ul key={key}>{item}</ul>
                    })}
                </ul>
            </div>
        );
    }
}

export default connect(
    state => ({
        preview: state.preview
    }),
    dispatch => ({
        show: () => {
            dispatch(show());
        },
        add: () => {
            dispatch(add());
        }
    })
)(Preview);