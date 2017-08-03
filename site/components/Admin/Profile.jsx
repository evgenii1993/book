import React, {Component}    from 'react';
import { Link }              from 'react-router-dom';
import { connect }           from 'react-redux';
import AdminPanel            from '../layouts/AdminPanel';

class Profile extends Component {

    render() {
        return (
            <div className="panel-profile">
                <AdminPanel/>
            </div>
        );
    }
}

export default connect(
    state => ({

    }),
    dispatch => ({

    })
)(Profile);