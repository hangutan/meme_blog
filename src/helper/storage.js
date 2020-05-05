import parseJWT from './parseJWT';
const keyToken = 'ACCESS_TOKEN';

const Storage = {
    setToken(token){
        localStorage.setItem(keyToken,token)
    },
    getToken(){
        const token = localStorage.getItem(keyToken);
        try{
            const parseObj = parseJWT(token);
            console.log("Parse token  : ",parseObj);
            if(parseObj.id){
                return token
            }
            return '';
        }catch(err){
            return '';
        }
    }
}

export default Storage;