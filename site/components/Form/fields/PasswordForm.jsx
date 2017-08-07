import React, {Component}    from 'react';
import string                from '../../../language/language';

export default class PasswordForm extends Component {
    state = {
        value: '',
        hide: true
    };
    updateValue = () => {
        this.setState({
            value: this.refs.input.value
        });
    };
    togglePass = () => {
      this.setState({
          hide: !this.state.hide
      });
    };
    render() {
        let {field} = this.props;
        return (
            <div className="col-xs-12">
                <div className="form-group form-group">
                    <label htmlFor={"form."+field.name}>{field.label}</label>
                    <div className="fields__password">
                        <input required={field.required}
                               onChange={this.updateValue}
                               ref="input"
                               type={this.state.hide ? "password" : "text"}
                               placeholder={field.placeholder}
                               id={"form."+field.name}
                               name={field.name}
                               className="form-control"/>
                        <a type='button'
                           title={string.show}
                           href="javascript:void(0)"
                           onClick={this.togglePass}>
                            <i className={this.state.hide ? 'fa fa-eye' : 'fa fa-eye-slash'} />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}