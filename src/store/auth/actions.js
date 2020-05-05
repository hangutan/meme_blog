import * as action from '../app/actions';
import {actSetUserInfor} from '../users/actions';
import {authService} from "./../../services";
import {Storage} from "../../helper";

const nameSpace = 'auth:';

const LOGIN_SUCCESS = `${nameSpace}LOGIN_SUCCESS`;

const actLoginSuccess = ({token})=>{
    return{
        type:LOGIN_SUCCESS,
        payload:token
    }
}

const asyncHanldeLogin =  ({email,password})=>{
    return async (dispatch)=>{
    try{
        dispatch(action.actShowLoading());
        const res = await authService.login({email,password});
        dispatch(action.actHideLoading());
            if(res.data.status !== 200){
                return{
                    ok:false,
                    error:res.data.error
                }
            }else{
                Storage.setToken(res.data.token);
                dispatch(actLoginSuccess(res.data));
                dispatch(actSetUserInfor(res.data));
                return{
                    ok:true
                }
            }
        }
    catch(err){
        dispatch(action.actHideLoading());
        return {
                ok : false,
                error:err.message
            }
        }
    }
}

export {
    asyncHanldeLogin,
    actLoginSuccess,
    LOGIN_SUCCESS
}