import {useEffect} from "react";
import {useSelector} from "react-redux";
import {useHistory,useLocation} from "react-router-dom";

export default function useAuth(){
    const token = useSelector(function(state){
        return state.Auth.ACCESS_TOKEN 
    })
    const location = useLocation();
    const history = useHistory();
    useEffect(() => {
       if(!token){
           history.push("/login");
       }
       //Nếu chưa đăng nhập thì đẩy qua login
    }, [location])
}