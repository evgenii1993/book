let initialState = {
    msgList: []
};


export default function MessageReducer(state = initialState, action) {
    let result = {
        msgList: []
    };
    switch (action.type) {
        case 'MSG_HIDE':
            result.msgList = [
                ...state.msgList
            ];
            result.msgList.splice(action.data, 1);
            break;
        case 'MSG_SHOW':
            result.msgList = [
                ...state.msgList,
                action.data
            ];
            break;
        default:
            result = state;
            break;
    }
    return result;
};