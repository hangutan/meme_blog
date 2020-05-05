const nameSpace = 'app:';

export const SHOW_LOADING = `${nameSpace}SHOW_LOADING`;
export const HIRE_LOADING = `${nameSpace}HIRE_LOADING`;

export const actShowLoading = ()=>{
    return{
        type:SHOW_LOADING,
        payload:null
    }
}


export const actHideLoading = ()=>{
    return{
        type:HIRE_LOADING,
        payload:null
    }
}