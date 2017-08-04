import React, {Component}    from 'react';
import { connect }           from 'react-redux';


export class DropDown extends Component {
    state = {
      open: false
    };
    toggle = () => {
        this.setState({
            open: !this.state.open
        })
    };
    render() {

        return (
            <div onClick={this.toggle} className={"btn-group" + (this.state.open ? ' open' : '') }>
                {this.props.children}
            </div>
        );
    }
}
export class MenuButton extends Component {
    render() {

        return (
            <div className="dropdown-toggle">
                {this.props.children}
                <span className="caret"/>
            </div>
        );
    }
}
export class MenuItem extends Component {
    render() {

        return (
            <li>
                {this.props.children}
            </li>
        );
    }
}
export class MenuList extends Component {
    render() {

        return (
            <ul className="dropdown-menu">
                {this.props.children}
            </ul>
        );
    }
}