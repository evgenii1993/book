export const getAuth = () => dispatch => {
    console.log("action begin");
    dispatch({
        type: "GET_AUTH",
        data: {
            auth: true
        }
    });
};