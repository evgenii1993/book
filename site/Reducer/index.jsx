import { combineReducers }  from 'redux';
import { routerReducer }    from 'react-router-redux';

import previewReducer       from './previewReducer';
import AdminPanelReducer    from './adminPanelReducer';
import MessageReducer       from './messageReducer';
import sendDataReducer      from './sendDataReducer';
import userReducer          from "./userReducer";

export default combineReducers({
    routing: routerReducer,
    adminPanel: AdminPanelReducer,
    message: MessageReducer,
    preview: previewReducer,
    sendData: sendDataReducer,
    user: userReducer
});
