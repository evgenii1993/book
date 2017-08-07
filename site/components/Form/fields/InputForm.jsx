import React, {Component}    from 'react';

export default class InputForm extends Component {
    state = {
        value: ''
    };
    updateValue = () => {
        this.setState({
            value: this.refs.input.value
        });
    };
    render() {
        let {field} = this.props;
        return (
            <div className="col-xs-12">
                <div className="form-group">
                    <label htmlFor={"form."+field.name}>{field.label}</label>
                    <input required={field.required}
                           onChange={this.updateValue}
                           ref="input"
                           type="text"
                           placeholder={field.placeholder}
                           id={"form."+field.name}
                           name={field.name}
                           className="form-control"/>
                </div>
            </div>
        );
    }
}