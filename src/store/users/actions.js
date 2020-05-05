import {userService} from '../../services';
import {actShowLoading,actHideLoading} from '../app/actions';
const nameSpace = 'user:';

export const SETUSERINFOR = `${nameSpace}SETUSER_INFOR`;
export const GET_USER_BY_ID = `${nameSpace}GET_USER_BY_ID`;

export const actSetUserInfor =({user})=>{
    return{
        type:SETUSERINFOR,
        payload:user
    }
}
export const asyncGetUserById = ({userid})=>{
    console.log(userid);
    return async (dispatch)=>{
        try{
            dispatch(actShowLoading());
            const res = await userService.getUserById({userid});
            dispatch(actHideLoading());
            if(res?.data?.status ===200){
                const user = res.data.user;
                dispatch(actSetUserInfor({user}))
                return{
                    ok:true,
                    user:user
                }
            }
            return{
                ok:false,
                err:res.data.error
            }
        }
        catch(err){
            dispatch(actHideLoading());
            return{
                ok:false,
                error:err.message
            }
        }
    }
}
export const asyncUpdateUser = ({avatar,fullname,gender,description})=>{
    console.log("data truyền vào :",avatar,fullname)
    return async (dispatch)=>{
        try{
            let formData = new FormData(); 
            formData.append('fullname', fullname);
            formData.append('gender', gender);
            formData.append('description', description);
            if(avatar){
                formData.append('avatar', avatar);
            }
            console.log("Form data :",formData);
            dispatch(actShowLoading());
            const res = await userService.updateProfile(formData);
            console.log("responsive :",res);
            dispatch(actHideLoading());
        }
        catch(err){
            dispatch(actHideLoading());
        }
    }
}
