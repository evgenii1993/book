import React, {Component}    from 'react';
import { Link }              from 'react-router-dom';
import { connect }           from 'react-redux';
import Login                 from './Login';
import Message               from '../Message/Message';
import  * as actionsUser     from '../../Actions/actionsUser';
import {
    MenuList,
    DropDown,
    MenuButton,
    MenuItem
} from '../UI/dropdown/DropDown';

class AdminPanel extends Component {

    componentWillMount(){
        this.props.isAuth();
    }

    render() {
        if(false !== this.props.user) {
            return (
                <div className="AdminPanel">
                    <div className="AdminPanel__header">
                        <a href="#" className="AdminPanel__logo">
                            <img src="/src/img/logo.png" className="AdminPanel__logo-img"/>
                        </a>
                        <a href="#" className="AdminPanel__menu-btn">
                            =
                        </a>
                        <a href="#" className="AdminPanel__user-display">
                            <DropDown>
                                <MenuButton>
                                    <span className="AdminPanel__user-name">Emma Davis</span>
                                    <img src="/src/img/avatar.png" className="AdminPanel__user-logo"/>
                                </MenuButton>
                                <MenuList>
                                    <MenuItem>111</MenuItem>
                                    <MenuItem>222</MenuItem>
                                    <MenuItem>333</MenuItem>
                                    <MenuItem>444</MenuItem>
                                </MenuList>
                            </DropDown>
                        </a>
                    </div>
                    <div className="AdminPanel__main">
                        <div className="AdminPanel__menu">
                            <div className="AdminPanel__menu-container">
                                <ul className="AdminPanel__menu-list">
                                    <li className="AdminPanel__menu-item">
                                        <a href="#">page 1</a>
                                    </li>
                                    <li className="AdminPanel__menu-item">
                                        <a href="#">page 2</a>
                                    </li>
                                    <li className="AdminPanel__menu-item">
                                        <a href="#">page 3</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="AdminPanel__content">
                            <div className="AdminPanel__content-inner">
                                TEXT
                            </div>
                        </div>
                    </div>
                    <Message />
                </div>
            );
        } else {
            return (
                <div>
                    <Login />
                    <Message />
                </div>

            )
        }

    }
}

export default connect(
    state => ({
        user: state.user
    }),
    dispatch => ({
        isAuth: () => {
            dispatch(actionsUser.sessionGet());
        }
    })
)(AdminPanel);