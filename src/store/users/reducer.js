import {SETUSERINFOR} from './actions';

const initstate = {
    user:''
};

function UserReducer(state = initstate,action){
    switch(action.type){
        case SETUSERINFOR:
            return{
                ...state,
                user:action.payload
            }
        default:
            return state;
    }
    
} 

export default UserReducer;