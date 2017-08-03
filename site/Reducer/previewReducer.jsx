const initialState = {
    test: []
};

export default function previewReducer(state = initialState, action) {
    let result = {};
    switch (action.type) {
        case 'ADD':
            result = state;
            result.test = [
                ...state.test,
                action.reyload
            ];
            break;
        case 'READY':
            result = state;
            break;
        default:
            result = state;
            break;
    }
    return result;
};