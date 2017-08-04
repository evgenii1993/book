let session = {
    authList: {},
    start: user => {
        session.authList[user._id] = user;
    },
    exit: id => {
        let result = false;
        if(session.authList[id] !== undefined){
            delete session.authList[id];
            result = true;
        }
        return result;

    },
    isAuth: id =>{
        return session.authList[id] !== undefined;
    }
};

module.exports = session;
