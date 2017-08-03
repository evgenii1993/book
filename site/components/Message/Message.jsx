import React, {Component}    from 'react';
import { Link }              from 'react-router-dom';
import { connect }           from 'react-redux';
import { hide }              from '../../Actions/actionsMessage';

class Message extends Component {

    print = (msg, index) => {
        let icon = undefined,
            close = () => {
                this.props.hide(index);
            };
        switch (msg.type){
            case 'info':
                icon = <i className="fa fa-info-circle" aria-hidden="true"/>;
                break;
            case 'error':
                icon = <i className="fa fa-exclamation-circle" aria-hidden="true"/>;
                break;
            case 'warn':
                icon = <i className="fa fa-exclamation-triangle" aria-hidden="true"/>;
                break;
        }

        setTimeout(()=>{
            this.props.hide(index);
        }, 10000);

        return (
            <div key={index} className={"message__item message__item--"+msg.type}>
                <div className="message__logo">
                    {icon}
                </div>
                <div className="message__inner">
                    <div className="message__title">{msg.title}</div>
                    <div className="message__text">{msg.text}</div>
                </div>
                <button className="message__close" onClick={close}>
                    <i className="fa fa-times" aria-hidden="true"/>
                </button>
            </div>
        )
    };

    render() {
        let {msgList} = this.props,
            renderList = [];

        msgList.forEach((item, index) => {
            renderList.push(this.print(item, index))
        });

        return (
            <div className="message">
                <div className="message__list">
                    {renderList}
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({
        msgList: state.message.msgList
    }),
    dispatch => ({
        hide: index => {
            dispatch(hide(index));
        }
    })
)(Message);