import {useSelector} from 'react-redux';
import {parseJWT} from '../../helper';

export default function useUserId(){
    const token = useSelector(function(state){
        return state.Auth.ACCESS_TOKEN;
    })
    try{
        const parseObj = parseJWT(token);
        if(parseObj && parseObj.id){
            return parseObj.id
        }
    }
    catch(err){
        return null
    }
}