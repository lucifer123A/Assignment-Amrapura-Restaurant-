import * as ActionTypes from './ActionTypes';

export const Users = (state={
    errMess: null,
    users: [],
},action)=>{
    switch(action.type){
        case ActionTypes.ADD_USER:
            return{...state, errMess:null, users:action.payload};

        case ActionTypes.USER_FAILED:
            return{...state, errMess: action.payload, users:[]};

        default:
            return state;
    }
}