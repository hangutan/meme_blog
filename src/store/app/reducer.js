import {
    SHOW_LOADING,
    HIRE_LOADING
}from './actions';

const initstate = {
    isLoading:false
};

function AppReducer(state = initstate,action){
    switch(action.type){
        case SHOW_LOADING:
            return{
                ...state,
                isLoading:true
            }
        case HIRE_LOADING:
            return{
                ...state,
                isLoading:false
            }
        default:
            return state;
    }

} 

export default AppReducer;