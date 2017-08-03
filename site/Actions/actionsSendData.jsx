//import request from 'ajax-request';
//import axios from 'axios';
//import post from 'http-post';
//import request from 'request';
//import postJson from 'post-json';
//import request from 'request-json';
import request from 'xhr-request';

export const send = (sendData, className, method) => dispatch => {
    console.log("sendData: " , sendData);
    request('http://localhost:3000/api/'+className+'/'+method, {
        method: 'PUT',
        json: true,
        body: {
            key: 1,
            data: sendData
        },
        responseType: 'json'
    }, function (err, data) {
        dispatch({
            type: "SEND_DATA",
            data: data
        });
    });
};

export const clear = () => dispatch => {
    dispatch({
        type: "CLEAR_DATA",
    });
};


// import createSocketIoMiddleware from 'redux-socket.io';
//
// import io from 'socket.io-client';
// let socket = io('http://localhost:3000');
// let socketIoMiddleware = createSocketIoMiddleware(socket, "server/", { execute: send });

