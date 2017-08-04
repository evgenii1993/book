import React, {Component}    from 'react';
import { Link }              from 'react-router-dom';
import { connect }           from 'react-redux';
import AdminPanel            from '../layouts/AdminPanel';
import { send, clear }       from '../../Actions/actionsSendData';
import  * as actionsUser     from '../../Actions/actionsUser';
import { show }              from '../../Actions/actionsMessage';

class Profile extends Component {

    componentWillReceiveProps(nextProps){
        let {response} = nextProps;
        if(response.success === true && response.method === 'out'){
            this.props.showMsg({
                title: response.data,
                text: "",
                type: 'info'
            });
            this.props.clearData();
            this.props.sessionExit();
            this.props.isAuth();
        }
    }

    render() {
        return (
            <div className="panel-profile">
                <AdminPanel>
                    Text
                    <button onClick={this.props.loginOut}>
                        Выход
                    </button>
                </AdminPanel>
            </div>
        );
    }
}

export default connect(
    state => ({
        response: state.sendData.response
    }),
    dispatch => ({
        loginOut: () => {
            dispatch(send({}, 'user', 'out'));
        },
        clearData: () => {
            dispatch(clear());
        },
        sessionExit: () => {
            dispatch(actionsUser.sessionExit());
        },
        showMsg: (msg) => {
            dispatch(show(msg));
        },
        isAuth: () => {
            dispatch(actionsUser.sessionGet());
        }
    })
)(Profile);