import React from 'react';
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import { LoginHeader,LoginForm } from '../../components/Login';
import {asyncHanldeLogin} from '../../store/auth/actions';
import {useNotAuth} from "../../helper";

function Login() {
    useNotAuth();
    const history = useHistory();
    const dispatch = useDispatch();
    const handleLogin = (form)=>{
        const {email,password} = form;
        dispatch(asyncHanldeLogin({email,password}))
        .then(res=>{
            console.log("Login : ",res);
            if(res.ok){
                history.push("/");
            }else{
                alert(res.error);
            }
        })
    }
    return (
        <main>
            <div className="ass1-login">
                <LoginHeader />
                <LoginForm
                    handleLogin={handleLogin}
                />
            </div>
        </main>
    )
}

export default Login;