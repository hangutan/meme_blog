import React from 'react';
import {Link} from 'react-router-dom';

function LoginHeader(){
    return(
        <div className="ass1-login__logo">
            <Link to="/" className="ass1-logo">TCL Meme</Link>
        </div>
    )
}

export default LoginHeader;