export const hide = (index) => dispatch => {
    dispatch({
        type: "MSG_HIDE",
        data: index
    });
};

export const show = (msg) => dispatch => {
    dispatch({
        type: "MSG_SHOW",
        data: msg
    });
};