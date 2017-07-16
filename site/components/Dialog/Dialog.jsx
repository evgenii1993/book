import React, {Component}    from 'react';

//noinspection JSAnnotator
export default class Dialog extends Component<{}, Props, State>{
    state = {
        show: this.props.show !== undefined,
        bg: this.props.bg !== undefined,
    };

    hide = () => {
      this.setState({
          show: false
      });
    };
    show = () => {
        this.setState({
            show: true
        });
    };


    render() {
        return (
            <div className={"dialog" + (this.state.show ? '' : ' dialog--hide')}>
                {
                    this.state.bg ?
                        <div className="dialog__bg"/>
                    :
                        ''
                }
                <div className="dialog__inner">
                    <div className="dialog__exit">
                        <button onClick={this.hide}>
                            <i className="fa fa-times" aria-hidden="true"/>
                        </button>
                    </div>
                    <div className="dialog__content">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}