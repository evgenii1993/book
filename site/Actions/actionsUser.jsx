import cookies from 'js-cookie';

export const sessionStart = user => dispatch => {
    dispatch({
        type: "SS_USER",
        data: user
    });
};

export const sessionExit = () => dispatch => {
    dispatch({
        type: "SE_USER",
    });
};

export const sessionGet = () => dispatch => {
    let result = false;

    try {
        result = cookies.get('key');
    } catch (e) {
        result = false;
    }

    dispatch({
        type: "SG_USER",
        data: result === undefined ? false : result
    });
};
