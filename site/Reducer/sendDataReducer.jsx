let initialState = {
    response: {}
};

export default function MessageReducer(state = initialState, action) {
    let result = {
        response: {}
    };
    switch (action.type) {
        case 'SEND_DATA':
            result.response = action.data;
            break;
        case 'CLEAR_DATA':
            result.response = {};
            break;
        default:
            result = state;
            break;
    }
    return result;
};