import Login from './../pages/Login/Login';
import HomePage from './../pages/HomePage/HomePage';
import Register from './../pages/Register/Register';
import UserDetail from './../pages/UserDetail/UserDetail';
import ChangePassword from './../pages/ChangePassword/ChangePassword';
import PostCreate from './../pages/PostCreate/PostCreate';
import PostDetail from './../pages/PostDetail/PostDetail';
import UserProfile from './../pages/UserProfile/UserProfile';

const Routers = [
    {
        path:'/login',
        exact:false,
        component:Login
    },
    {
        path:'/',
        exact:true,
        component:HomePage
    },
    {
        path:'./home',
        exact:true,
        component:HomePage
    },
    {
        path:'/register',
        exact:false,
        component:Register
    },
    {
        path:'/change-password',
        exact:false,
        component:ChangePassword
    },
    {
        path:'/post/create',
        exact:false,
        component:PostCreate
    },
    {
        path:'/user/profile',
        exact:false,
        component:UserProfile
    },
    {
        path:'/post/:post_id',
        exact:false,
        component:PostDetail
    },
    {
        path:'/users/:user_id',
        exact:false,
        component:UserDetail
    }
    
    
]

export default Routers;