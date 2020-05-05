import React,{useState} from 'react';
import {Link} from 'react-router-dom';

function LoginForm({
    handleLogin
    }) {
        const [form,setForm]=useState({
            email:"",
            password:""
        })
        const onChangeFormData = (e,textField)=>{
            setForm({
                ...form,
                [textField]:e.target.value
            })
        }
        const onSubmitFormData = (e)=>{
            e.preventDefault();
            handleLogin && handleLogin(form);
        }
    return (
        <div className="ass1-login__content">
            <p>Đăng nhập</p>
            <div className="ass1-login__form">
                <form action="#">
                    <input
                        required 
                        type="text" 
                        value={form.name} 
                        onChange={(e)=>onChangeFormData(e,"email")}
                        placeholder="Email" 
                        className="form-control" 
                    />

                    <input 
                        required 
                        type="password" 
                        value={form.password}
                        placeholder="Mật khẩu" 
                        className="form-control" 
                        onChange={(e)=>onChangeFormData(e,"password")}
                    />
                    <div className="ass1-login__send">
                        <Link to='/register'>Đăng ký tài khoản</Link>
                        <button 
                            type="submit" 
                            className="ass1-btn"
                            onClick={(e)=>onSubmitFormData(e)}
                        >Đăng nhập</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;