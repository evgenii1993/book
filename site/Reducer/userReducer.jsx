import cookies from 'js-cookie';

let initialState = false;

export default function UserReducer(state = initialState, action) {
    let result = {};
    switch (action.type) {
        case 'SS_USER':
            result = action.data;
            cookies.set('key', action.data._id);
            break;
        case 'SE_USER':
            cookies.remove('key');
            result = {};
            break;
        case 'SG_USER':
            result = action.data;
            break;
        default:
            result = state;
            break;
    }
    return result;
};