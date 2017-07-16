import React, {Component}    from 'react';
import string from "../../language/language";

//noinspection JSAnnotator
export default class Form extends Component<{}, Props, State>{

    handleSubmit = event => {
        event.preventDefault();
        let formData = [],
            field = undefined;


        for (field in this.refs) {
            formData[field] = this.refs[field].value;
        }
        console.log("formData: ", formData);
    };
    render() {
        let {structure} = this.props,
            fields = [],
            field = {
                type: undefined,
                name: undefined,
                value: undefined,
                label: undefined
            };

        structure.forEach(field => {
            switch (field.type){
                case 'input':
                    fields.push(
                        <div key={field.name} className="col-xs-12">
                            <div className="form-group">
                                <label htmlFor={"form."+field.name}>{field.label}</label>
                                <input id={"form."+field.name} ref={field.name} name={field.name} className="form-control"/>
                            </div>
                        </div>
                    );
                    break;
                case 'text':
                    fields.push(
                        <div key={field.name} className="col-xs-12">
                            <div className="form-group">
                                <label htmlFor={"form."+field.name}>{field.label}</label>
                                <textarea id={"form."+field.name} ref={field.name} name={field.name} className="form-control"/>
                            </div>
                        </div>
                    );
                    break;
            }
        });

        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <div className="form__fields row">
                    {fields}
                </div>
                <div className="form__buttons">
                    <button type="submit">
                        {string.save}
                    </button>
                </div>
            </form>
        );
    }
}