let session = {
    authList: {},
    start: user => {
        session.authList[user._id] = user;
    },
    exit: id => {
        delete session.authList[id];
    },
    isAuth: id =>{
        return session.authList[id] !== undefined;
    }
};

module.exports = session;
