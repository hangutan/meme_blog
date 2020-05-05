import { LOGIN_SUCCESS} from './actions';
import {Storage} from "../../helper";

const initstate = {
    ACCESS_TOKEN : Storage.getToken() || ""
};

function AuthReducer(state = initstate,action){
    switch(action.type){
        case LOGIN_SUCCESS:
            return {
                ...state,
                ACCESS_TOKEN:action.payload
            }
        default:
            return state;
    }
} 

export default AuthReducer;