import request from 'ajax-request';


module.exports = (state = [], action) =>{
    console.log("action: ", action);
    let result = [];
    switch (action.type) {
        // case 'ADD':
        //     result = [
        //         ...state,
        //         action.reyload
        //     ];
        //     break;
        case 'ADD':
        case 'READY':
            request({
                url: '/api/books/getAll',
                method: 'POST',
            }, function(err, res, body) {
                console.log("result: ", res);
                result = [
                    ...state,
                    res
                ];
            });
            break;
    }
    return result;
};