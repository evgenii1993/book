export default function AdminPanelReducer(state = [], action) {
    let result = {
        test: 'oleg'
    };
    switch (action.type) {
        case 'GET_AUTH':
            console.log("reducer begin", action);
            result = action.data;
            break;
        default:
            result = state;
            break;
    }
    return result;
};