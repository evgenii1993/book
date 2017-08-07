import React, {Component}    from 'react';
import { Link }              from 'react-router-dom';
import { connect }           from 'react-redux';
import Form                  from '../Form/Form';
import string                from "../../language/language";
import { show }              from '../../Actions/actionsMessage';
import { send, clear }       from '../../Actions/actionsSendData';
import  * as actionsUser     from '../../Actions/actionsUser';

class Login extends Component {

    componentWillReceiveProps(nextProps){
        let {response} = nextProps;
        if(response.success === false && response.method === 'auth'){
            this.props.showMsg({
                title: string.error,
                text: response.data,
                type: 'error'
            });
            this.props.clearData();
        }
        if(response.success === true && response.method === 'auth'){
            this.props.showMsg({
                title: string.hello + ": " + response.data.login,
                text: '',
                type: 'info'
            });
            this.props.clearData();
            this.props.sessionStart(response.data);
        }
    }

    auth = (data) => {
        this.props.auth(data);
    };

    render() {
        let structureForm = [
            {
                type: 'input',
                name: 'login',
                placeholder: string.login,
                required: true,
                label: string.login+": "
            },
            {
                type: 'password',
                name: 'password',
                placeholder: string.password,
                required: true,
                label: string.password+": "
            }
        ];

        return (
            <div className="panel-auth">
                <div className="panel-auth__form">
                    <h2>{string.singIn}</h2>
                    <Form structure={structureForm}
                          send={this.auth}/>
                    <Link to="/app/">main</Link>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({
        response: state.sendData.response
    }),
    dispatch => ({
        auth: (data) => {
            dispatch(send(data, 'user', 'auth'));
        },
        showMsg: (msg) => {
            dispatch(show(msg));
        },
        clearData: () => {
            dispatch(clear());
        },
        sessionStart: (user) => {
            dispatch(actionsUser.sessionStart(user));
        }
    })
)(Login);