module.exports = (state = [], action) =>{
    console.log("action: ", action);
    if(action.type = "ADD"){
        return [
            ...state,
            action.reyload
        ];
    }
  return state;
};