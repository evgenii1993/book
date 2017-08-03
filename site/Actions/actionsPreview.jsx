export const show = () => dispatch => {
    dispatch({
        type: "READY"
    });
};
export const add = () => dispatch => {
    dispatch({
        type: "ADD",
        reyload: "simple1"
    });
};